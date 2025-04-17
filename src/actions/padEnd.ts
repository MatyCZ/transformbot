import type { Action } from "../types.ts";

export type PadEndAction = Action<string, string>;

export function padEnd(maxLength: number, fillString?: string): PadEndAction {
  return (input) => {
    return input.padEnd(maxLength, fillString);
  };
}
