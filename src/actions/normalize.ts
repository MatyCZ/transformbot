import type { Action } from "../types.ts";

export type NormalizeAction = Action<string | null, string | null>;
export type NormalizeForm = "NFC" | "NFD" | "NFKC" | "NFKD";

export function normalize(form?: NormalizeForm): NormalizeAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.normalize(form);
  };
}
