import type { Action } from "../types.ts";

export type ToPrecisionAction = Action<number | null, string | null>;

export function toPrecision(precision?: number): ToPrecisionAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.toPrecision(precision);
  };
}
