import type { Action } from "../types.ts";

export type TrimAction = Action<string | null, string | null>;

export function trim(): TrimAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.trim();
  };
}
