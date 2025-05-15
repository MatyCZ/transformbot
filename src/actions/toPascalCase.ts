import type { Action } from "../types.ts";

export type ToPascalCaseAction = Action<string | null, string | null>;

export function toPascalCase(): ToPascalCaseAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input
      .replace(/[_\-\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
      .replace(/^\w/, (c) => c.toUpperCase());
  };
}
