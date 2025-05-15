import type { Action } from "../types.ts";

export type ToEmptyAction = Action<string | null, string>;

export function toEmpty(): ToEmptyAction {
  return (input) => {
    if (input === null) {
      return "";
    }

    return input;
  };
}
