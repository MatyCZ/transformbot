import type { Action } from "../types.ts";

export type NormalizeAction = Action<string, string>;
export type NormalizeForm = "NFC" | "NFD" | "NFKC" | "NFKD";

export function normalize(form?: NormalizeForm): NormalizeAction {
  return (input) => {
    return input.normalize(form);
  };
}
