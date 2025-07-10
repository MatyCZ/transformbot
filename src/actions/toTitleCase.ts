import type { Action } from "../types.ts";

export type ToTitleCaseAction = Action<string | null, string | null>;

/**
 * Converts the input string to title case format (each word begins with a capital letter).
 */
export function toTitleCase(): ToTitleCaseAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input
      .toLowerCase()
      .split(/\s+/)
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
}
