import type { Action } from "../types.ts";

export type TrimEndAction = Action<string | null, string | null>;

export function trimEnd(): TrimEndAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.trimEnd();
  };
}
