import type { Action } from "../types.ts";

export type ToKebabCaseAction = Action<string, string>;

export function toKebabCase(): ToKebabCaseAction {
  return (input) => {
    return input
      .replace(/([a-z])([A-Z])/g, "$1-$2")
      .replace(/[\s_]+/g, "-")
      .toLowerCase();
  };
}
