import type { Action } from "../types.ts";

export type ToWellFormedAction = Action<string | null, string | null>;

export function toWellFormed(): ToWellFormedAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.toWellFormed();
  };
}
