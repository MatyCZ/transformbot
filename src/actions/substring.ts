import type { Action } from "../types.ts";

export type SubstringAction = Action<string | null, string | null>;

export function substring(start: number, end?: number): SubstringAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.substring(start, end);
  };
}
