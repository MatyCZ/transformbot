import type { Action } from "../types.ts";

export type TruncateAction = Action<string | null, string | null>;

export function truncate(maxLength: number, suffix = "..."): TruncateAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    if (input.length <= maxLength) {
      return input;
    }

    return input.substring(0, maxLength) + suffix;
  };
}
