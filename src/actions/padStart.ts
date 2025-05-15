import type { Action } from "../types.ts";

export type PadStartAction = Action<string | null, string | null>;

export function padStart(
  maxLength: number,
  fillString?: string,
): PadStartAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.padStart(maxLength, fillString);
  };
}
