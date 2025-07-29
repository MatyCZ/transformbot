import { Conversion } from "../types.ts";

export type DateConversion = Conversion<unknown, Date | null>;

export function formatDateToISO(input: string): string | null {
  if (!input) {
    return null;
  }

  // ISO formát: 1990-05-01
  const isoPattern = /^(\d{4})-(\d{2})-(\d{2})$/;

  // ISO formát s časem: 1990-05-01T14:30:45 nebo 1990-05-01T14:30
  const isoTimePattern =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/;

  // EU formát: 18.09.2020 nebo 18. 9. 2020
  const euPattern = /^(\d{1,2})\.( )?(\d{1,2})\.( )?(\d{4})$/;

  // EU formát s časem: 18.09.2020 14:30:45 nebo 18. 9. 2020 14:30:45 nebo 18.09.2020 14:30
  const euTimePattern =
    /^(\d{1,2})\.( )?(\d{1,2})\.( )?(\d{4})( )(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/;

  // USA formát: 07/29/2025
  const usaPattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

  // USA formát s časem: 07/29/2025 14:30:45 nebo 07/29/2025 14:30
  const usaTimePattern =
    /^(\d{1,2})\/(\d{1,2})\/(\d{4})( )(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/;

  let year: number;
  let month: number;
  let day: number;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let hasTime = false;

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
    hasTime = true;
  } else if (euPattern.test(input)) {
    const match = input.match(euPattern);

    if (!match) {
      return null;
    }

    day = parseInt(match[1], 10);
    month = parseInt(match[3], 10);
    year = parseInt(match[5], 10);
  } else if (euTimePattern.test(input)) {
    const match = input.match(euTimePattern);

    if (!match) {
      return null;
    }

    day = parseInt(match[1], 10);
    month = parseInt(match[3], 10);
    year = parseInt(match[5], 10);
    hours = parseInt(match[7], 10);
    minutes = parseInt(match[8], 10);
    seconds = match[9] ? parseInt(match[9], 10) : 0;
    hasTime = true;
  } else if (usaPattern.test(input)) {
    const match = input.match(usaPattern);

    if (!match) {
      return null;
    }

    month = parseInt(match[1], 10);
    day = parseInt(match[2], 10);
    year = parseInt(match[3], 10);
  } else if (usaTimePattern.test(input)) {
    const match = input.match(usaTimePattern);

    if (!match) {
      return null;
    }

    month = parseInt(match[1], 10);
    day = parseInt(match[2], 10);
    year = parseInt(match[3], 10);
    hours = parseInt(match[5], 10);
    minutes = parseInt(match[6], 10);
    seconds = match[7] ? parseInt(match[7], 10) : 0;
    hasTime = true;
  } else {
    return null;
  }

  // Kontrola platnosti data
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    return null;
  }

  // Kontrola platnosti času
  if (
    hasTime &&
    (hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59 ||
      seconds < 0 ||
      seconds > 59)
  ) {
    return null;
  }

  // Formátování data do ISO formátu
  const dateString = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

  if (hasTime) {
    const timeString = `T${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    return `${dateString}${timeString}`;
  } else {
    return dateString;
  }
}

export function date(): DateConversion {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return null;
    }

    if (input instanceof Date) {
      return isNaN(input.getTime()) ? null : input;
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
      const trimmed = input.trim();

      // Pokud je řetězec prázdný, vrátíme null
      if (trimmed === "") {
        return null;
      }

      // Kontrola, zda řetězec obsahuje pouze číslice (číslo jako řetězec)
      if (/^-?\d+$/.test(trimmed)) {
        const num = Number(trimmed);
        const numStrLength = Math.abs(num).toString().length;

        if (numStrLength === 10) {
          return new Date(num * 1000);
        }

        if (numStrLength === 13) {
          return new Date(num);
        }

        return null;
      }

      // Nyní zkontrolujeme, zda řetězec obsahuje pouze číslice (možná s čárkou nebo tečkou)
      // Pokud ano, vrátíme null
      if (/^-?\d+([.,]\d+)?$/.test(trimmed)) {
        return null;
      }

      // Převod stringu na Date objekt podle různých formátů
      const isoString = formatDateToISO(trimmed);

      if (isoString) {
        return new Date(isoString);
      }

      // Pokud se nepodařilo převést string pomocí našich vzorů, zkusíme nativní převod
      const dateObj = new Date(trimmed);

      if (!isNaN(dateObj.getTime())) {
        return dateObj;
      }
    }

    return null;
  };
}
