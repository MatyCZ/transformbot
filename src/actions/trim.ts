import type { Action } from "../types.ts";

export type TrimAction = Action<string, string>;

export function trim(): TrimAction {
  return (input) => {
    return input.trim();
  };
}
