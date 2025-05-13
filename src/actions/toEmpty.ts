import type { Action } from "../types.ts";

export type ToEmptyAction = Action<string | undefined | null, string>;

export function toEmpty(): ToEmptyAction {
  return (input) => {
    if (input === undefined || input === null) {
      return "";
    }

    return input;
  };
}
