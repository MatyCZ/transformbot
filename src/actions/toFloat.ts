import type { Action } from "../types.ts";

export type ToFloatAction = Action<number | string | null, number | null>;

export function toFloat(): ToFloatAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    if (typeof input === "number") {
      if (isNaN(input)) {
        return 0.0;
      }

      return input % 1 === 0 ? Number(input.toFixed(1)) : input;
    }

    if (typeof input === "string") {
      const num = parseFloat(input.replace(",", "."));

      if (isNaN(num)) {
        return 0.0;
      }

      return num % 1 === 0 ? Number(num.toFixed(1)) : num;
    }

    return 0.0;
  };
}
