import type { Action } from "../types.ts";

export type TrimStartAction = Action<string, string>;

export function trimStart(): TrimStartAction {
  return (input) => {
    return input.trimStart();
  };
}
