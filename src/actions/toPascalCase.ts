import type { Action } from "../types.ts";

export type ToPascalCaseAction = Action<string, string>;

export function toPascalCase(): ToPascalCaseAction {
  return (input) => {
    return input
      .replace(/[_\-\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
      .replace(/^\w/, (c) => c.toUpperCase());
  };
}
