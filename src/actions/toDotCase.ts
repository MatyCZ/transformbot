import type { Action } from "../types.ts";

export type ToDotCaseAction = Action<string, string>;

export function toDotCase(): ToDotCaseAction {
  return (input) => {
    return input
      .replace(/([a-z])([A-Z])/g, "$1.$2")
      .replace(/[\s_\\-]+/g, ".")
      .toLowerCase();
  };
}
