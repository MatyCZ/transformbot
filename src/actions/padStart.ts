import type { Action } from "../types.ts";

export type PadStartAction = Action<string, string>;

export function padStart(
  maxLength: number,
  fillString?: string,
): PadStartAction {
  return (input) => {
    return input.padStart(maxLength, fillString);
  };
}
