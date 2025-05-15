import type { Action } from "../types.ts";

export type ToLowerCaseAction = Action<string | null, string | null>;

export function toLowerCase(): ToLowerCaseAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.toLowerCase();
  };
}
