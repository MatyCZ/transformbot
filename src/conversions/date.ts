import { Conversion } from "../types.ts";

export type DateConversion = Conversion<unknown, Date | null>;

function parseISOFormat(input: string) {
  // ISO format: 1990-05-01
  const isoPattern = /^(\d{4})-(\d{2})-(\d{2})$/;

  /**
   * ISO format with time:
   * - 1990-05-01T14:30
   * - 1990-05-01T14:30:45
   * - 1990-05-01T14:30:45.123
   * - 1990-05-01T14:30:45Z
   * - 1990-05-01T14:30:45+02:00
   * - 1990-05-01T14:30:45.123+02:00
   * - 1990-05-01T14:30:45.123Z
   * - 1990-05-01 14:30
   * - 1990-05-01 14:30:45
   * - 1990-05-01 14:30:45.123
   * - 1990-05-01 14:30:45+02:00
   * - 1990-05-01 14:30:45.123+02:00
   */
  const isoTimePattern =
    /^(\d{4})-(\d{2})-(\d{2})[T ](\d{1,2}):(\d{1,2})(?::(\d{1,2}))?(?:\.(\d{1,3}))?(?:Z|([+-])(\d{2}):(\d{2}))?$/;

  let year: number;
  let month: number;
  let day: number;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let timezoneOffset: string | null = null;
  let hasTime = false;
  let isUtc = false;

  if (isoPattern.test(input)) {
    const match = input.match(isoPattern);

    if (!match) {
      return null;
    }

    year = parseInt(match[1], 10);
    month = parseInt(match[2], 10);
    day = parseInt(match[3], 10);
  } else if (isoTimePattern.test(input)) {
    const match = input.match(isoTimePattern);

    if (!match) {
      return null;
    }

    year = parseInt(match[1], 10);
    month = parseInt(match[2], 10);
    day = parseInt(match[3], 10);
    hours = parseInt(match[4], 10);
    minutes = parseInt(match[5], 10);
    seconds = match[6] ? parseInt(match[6], 10) : 0;
    milliseconds = match[7] ? parseInt(match[7], 10) : 0;

    // Kontrola, zda je přítomno 'Z' (značí UTC)
    isUtc = input.includes("Z");

    // Zpracování časové zóny
    if (match[8] && match[9] && match[10]) {
      const tzSign = match[8];
      const tzHours = match[9];
      const tzMinutes = match[10];
      timezoneOffset = `${tzSign}${tzHours}:${tzMinutes}`;
    }

    hasTime = true;
  } else {
    return null;
  }

  // Date validation
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  // Time validation
  if (
    hasTime &&
    (hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59 ||
      seconds < 0 ||
      seconds > 59 ||
      milliseconds < 0 ||
      milliseconds > 999)
  ) {
    return null;
  }

  // Format date to ISO format
  const dateString = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

  if (hasTime) {
    let timeString = `T${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    if (milliseconds > 0) {
      timeString += `.${milliseconds.toString().padStart(3, "0")}`;
    }

    if (isUtc) {
      timeString += "Z";
    } else if (timezoneOffset) {
      timeString += timezoneOffset;
    }

    return `${dateString}${timeString}`;
  } else {
    return dateString;
  }
}

function parseByFormat(input: string, format: string) {
  if (!input || !format) {
    return new Date(NaN);
  }

  // Definice tokenů ve formátu
  const formatTokens: Record<string, RegExp> = {
    YYYY: /(\d{4})/, // Rok (4 číslice)
    MM: /(\d{2})/, // Měsíc (2 číslice)
    DD: /(\d{2})/, // Den (2 číslice)
    HH: /(\d{2})/, // Hodina (2 číslice)
    mm: /(\d{2})/, // Minuta (2 číslice)
    ss: /(\d{2})/, // Sekunda (2 číslice)
    sss: /(\d{3})/, // Milisekunda (3 číslice)
    Z: /([Z]|[+-]\d{2}:\d{2})/, // Časové pásmo (Z nebo ±HH:mm)
    // Přidání podpory pro jednociferné hodnoty
    M: /(\d{1,2})/, // Měsíc (1-2 číslice)
    D: /(\d{1,2})/, // Den (1-2 číslice)
    H: /(\d{1,2})/, // Hodina (1-2 číslice)
    m: /(\d{1,2})/, // Minuta (1-2 číslice)
    s: /(\d{1,2})/, // Sekunda (1-2 číslice)
  };

  // Najděte všechny tokeny ve formátu
  // Upravíme regex pro podporu nových tokenů
  const formatRegex = /YYYY|MM|DD|HH|mm|ss|sss|Z|M|D|H|m|s|./g;
  const formatParts = format.match(formatRegex) || [];

  // Vytvořte regulární výraz z formátu
  let regexString = "^";
  let tokenPositions: { token: string; position: number }[] = [];
  let position = 1;

  for (const part of formatParts) {
    if (formatTokens[part]) {
      regexString += formatTokens[part].source;
      tokenPositions.push({ token: part, position: position++ });
    } else if (part === "T") {
      regexString += "T";
    } else {
      // Escapujeme speciální znaky v regulárním výrazu
      regexString += part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }
  regexString += "$";

  const regex = new RegExp(regexString);
  const match = input.match(regex);

  if (!match) {
    return new Date(NaN);
  }

  // Výchozí hodnoty pro datum a čas
  let year = 0;
  let month = 1; // Výchozí je leden
  let day = 1; // Výchozí je první den
  let hour = 0;
  let minute = 0;
  let second = 0;
  let millisecond = 0;
  let timezone: string | null = null;

  // Extrahujte hodnoty z odpovídajících skupin
  for (const { token, position } of tokenPositions) {
    const value = match[position];

    switch (token) {
      case "YYYY":
        year = parseInt(value, 10);
        // Kontrola rozšířeného roku se znaménkem
        if (year < 0 || year > 9999) {
          // Rozšířené roky nejsou podporovány nebo -000000 je zakázáno
          if (value === "-000000") return new Date(NaN);
        }
        break;
      case "MM":
      case "M":
        month = parseInt(value, 10);
        if (month < 1 || month > 12) return new Date(NaN);
        break;
      case "DD":
      case "D":
        day = parseInt(value, 10);
        if (day < 1 || day > 31) return new Date(NaN);
        break;
      case "HH":
      case "H":
        hour = parseInt(value, 10);
        // Povolení speciálního případu 24:00:00
        if (hour === 24) {
          if (minute === 0 && second === 0 && millisecond === 0) {
            hour = 0;
            day += 1;
          } else {
            return new Date(NaN);
          }
        }
        if (hour < 0 || hour > 23) return new Date(NaN);
        break;
      case "mm":
      case "m":
        minute = parseInt(value, 10);
        if (minute < 0 || minute > 59) return new Date(NaN);
        break;
      case "ss":
      case "s":
        second = parseInt(value, 10);
        if (second < 0 || second > 59) return new Date(NaN);
        break;
      case "sss":
        millisecond = parseInt(value, 10);
        if (millisecond < 0 || millisecond > 999) return new Date(NaN);
        break;
      case "Z":
        timezone = value;
        break;
    }
  }

  // Sestavte datum - vždy použijte UTC pro konzistentní výsledky
  let dateObj: Date;

  if (timezone) {
    if (timezone === "Z") {
      // UTC
      dateObj = new Date(
        Date.UTC(year, month - 1, day, hour, minute, second, millisecond),
      );
    } else {
      // Časové pásmo ve formátu +HH:mm nebo -HH:mm
      const isoString = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}T${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}.${millisecond.toString().padStart(3, "0")}${timezone}`;
      dateObj = new Date(isoString);
    }
  } else {
    // Lokální čas
    dateObj = new Date(year, month - 1, day, hour, minute, second, millisecond);
  }

  return dateObj;
}

export function date(format?: string): DateConversion {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return null;
    }

    if (input instanceof Date) {
      return new Date(input);
    }

    if (typeof input === "number") {
      const inputStrLength = Math.abs(input).toString().length;

      if (inputStrLength === 10) {
        return new Date(input * 1000);
      }

      if (inputStrLength === 13) {
        return new Date(input);
      }

      return null;
    }

    if (typeof input === "string") {
      const inputTrimmed = input.trim();

      // If a string is empty, return null
      if (inputTrimmed === "") {
        return null;
      }

      // Check if a string contains only digits (number as string)
      if (/^-?\d+$/.test(inputTrimmed)) {
        const num = Number(inputTrimmed);
        const numStrLength = Math.abs(num).toString().length;

        if (numStrLength === 10) {
          return new Date(num * 1000);
        }

        if (numStrLength === 13) {
          return new Date(num);
        }

        return null;
      }

      // Check if a string contains only digits (possibly with comma or dot)
      if (/^-?\d+([.,]\d+)?$/.test(inputTrimmed)) {
        return null;
      }

      const isoString = parseISOFormat(inputTrimmed);

      if (isoString) {
        return new Date(isoString);
      }

      if (!format) {
        return null;
      }

      const dateObj = parseByFormat(inputTrimmed, format);

      if (!isNaN(dateObj.getTime())) {
        return dateObj;
      }
    }

    return null;
  };
}
