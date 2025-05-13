import type { Action } from "../types.ts";

export type ToExponentialAction = Action<number, string>;

export function toExponential(fractionDigits?: number): ToExponentialAction {
  return (input) => {
    return input.toExponential(fractionDigits);
  };
}
