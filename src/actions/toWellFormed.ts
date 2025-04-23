import type { Action } from "../types.ts";

export type ToWellFormedAction = Action<string, string>;

export function toWellFormed(): ToWellFormedAction {
  return (input) => {
    return input.toWellFormed();
  };
}
