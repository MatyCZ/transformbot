import type { Action } from "../types.ts";

export type PadEndAction = Action<string | null, string | null>;

export function padEnd(maxLength: number, fillString?: string): PadEndAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.padEnd(maxLength, fillString);
  };
}
