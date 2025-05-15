import type { Action } from "../types.ts";

export type ToFixedAction = Action<number | null, string | null>;

export function toFixed(fractionDigits?: number): ToFixedAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.toFixed(fractionDigits);
  };
}
