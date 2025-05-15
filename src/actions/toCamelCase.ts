import type { Action } from "../types.ts";

export type ToCamelCaseAction = Action<string | null, string | null>;

export function toCamelCase(): ToCamelCaseAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input
      .replace(/([-_ ]+[a-zA-Z0-9])/g, (group) =>
        group.toUpperCase().replace(/[-_ ]/g, ""),
      )
      .replace(/^[A-Z]/, (first) => first.toLowerCase());
  };
}
