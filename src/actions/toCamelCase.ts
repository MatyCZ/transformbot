import type { Action } from "../types.ts";

export type ToCamelCaseAction = Action<string, string>;

export function toCamelCase(): ToCamelCaseAction {
  return (input) => {
    return input
      .replace(/([-_ ]+[a-zA-Z0-9])/g, (group) =>
        group.toUpperCase().replace(/[-_ ]/g, ""),
      )
      .replace(/^[A-Z]/, (first) => first.toLowerCase());
  };
}
