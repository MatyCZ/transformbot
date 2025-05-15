import type { Action } from "../types.ts";

export type ToDigitsAction = Action<string | null, string | null>;

export function toDigits(): ToDigitsAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.replace(/\D/g, "");
  };
}
