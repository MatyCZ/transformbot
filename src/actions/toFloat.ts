import type { Action } from "../types.ts";

export type ToFloatAction = Action<number | string, number>;

export function toFloat(): ToFloatAction {
  return (input) => {
    if (input === undefined || input === null) {
      return 0.0;
    }

    if (typeof input === "number") {
      return isNaN(input) ? 0.0 : input;
    }

    if (typeof input === "string") {
      const num = parseFloat(input.replace(",", "."));
      return isNaN(num) ? 0.0 : num;
    }

    return 0.0;
  };
}
