import type { Action } from "../types.ts";

export type ToUpperCaseAction = Action<string, string>;

export function toUpperCase(): ToUpperCaseAction {
  return (input) => {
    return input.toUpperCase();
  };
}
