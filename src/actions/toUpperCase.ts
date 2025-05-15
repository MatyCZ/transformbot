import type { Action } from "../types.ts";

export type ToUpperCaseAction = Action<string | null, string | null>;

export function toUpperCase(): ToUpperCaseAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.toUpperCase();
  };
}
