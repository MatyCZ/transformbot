import type { Action } from "../types.ts";

export type ToLowerCaseAction = Action<string, string>;

export function toLowerCase(): ToLowerCaseAction {
  return (input) => {
    return input.toLowerCase();
  };
}
