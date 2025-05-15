import type { Action } from "../types.ts";

export type ToKebabCaseAction = Action<string | null, string | null>;

export function toKebabCase(): ToKebabCaseAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  };
}
