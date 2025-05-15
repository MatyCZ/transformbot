import type { Action } from "../types.ts";

export type ToExponentialAction = Action<number | null, string | null>;

export function toExponential(fractionDigits?: number): ToExponentialAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.toExponential(fractionDigits);
  };
}
