import type { Action } from "../types.ts";

export type ToSnakeCaseAction = Action<string, string>;

export function toSnakeCase(): ToSnakeCaseAction {
  return (input) => {
    return input
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/[\s-]+/g, "_")
      .toLowerCase();
  };
}
