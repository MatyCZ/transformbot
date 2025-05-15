import type { Action } from "../types.ts";

export type TrimStartAction = Action<string | null, string | null>;

export function trimStart(): TrimStartAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.trimStart();
  };
}
