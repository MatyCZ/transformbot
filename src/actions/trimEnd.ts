import type { Action } from "../types.ts";

export type TrimEndAction = Action<string, string>;

export function trimEnd(): TrimEndAction {
  return (input) => {
    return input.trimEnd();
  };
}
