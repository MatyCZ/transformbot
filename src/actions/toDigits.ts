import type { Action } from "../types.ts";

export type ToDigitsAction = Action<string, string>;

export function toDigits(): ToDigitsAction {
  return (input) => {
    return input.replace(/\D/g, "");
  };
}
