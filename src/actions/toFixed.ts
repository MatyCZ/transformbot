import type { Action } from "../types.ts";

export type ToFixedAction = Action<number, string>;

export function toFixed(fractionDigits?: number): ToFixedAction {
  return (input) => {
    return input.toFixed(fractionDigits);
  };
}
