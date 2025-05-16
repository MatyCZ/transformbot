import type { Action } from "../types.ts";

export type SliceAction = Action<string | null, string | null>;

export function slice(start?: number, end?: number): SliceAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.slice(start, end);
  };
}
