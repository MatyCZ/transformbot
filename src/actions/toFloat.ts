import type { Action } from "../types.ts";

export type ToFloatAction = Action<string | null, string | null>;

export function toFloat(fractionDigits?: number): ToFloatAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    const normalized = input.replace(",", ".");

    // If the last character is a dot (e.g. writing decimal)
    if ("." === normalized.trim().slice(-1)) {
      return normalized;
    }

    const num = parseFloat(normalized);

    if (isNaN(num)) {
      return null;
    }

    if (fractionDigits) {
      return num.toFixed(fractionDigits);
    }

    return String(normalized);
  };
}
