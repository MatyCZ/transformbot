import type { Action } from "../types.ts";

export type ToPrecisionAction = Action<number, string>;

export function toPrecision(precision?: number): ToPrecisionAction {
  return (input) => {
    return input.toPrecision(precision);
  };
}
