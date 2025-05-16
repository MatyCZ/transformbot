import type { Action } from "../types.ts";

export type RepeatAction = Action<string | null, string | null>;

export function repeat(count: number): RepeatAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.repeat(count);
  };
}
