import type { Action } from "../types.ts";

export type ToCapitalCaseAction = Action<string, string>;

export function toCapitalCase(): ToCapitalCaseAction {
  return (input) => {
    return input
      .replace(/[_\\-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
}
