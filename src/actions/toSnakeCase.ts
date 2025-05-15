import type { Action } from "../types.ts";

export type ToSnakeCaseAction = Action<string | null, string | null>;

export function toSnakeCase(): ToSnakeCaseAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .replace(/[\s-]+/g, "_")
      .toLowerCase();
  };
}
