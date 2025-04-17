import type { Action } from "../types.ts";

export type StripDiacriticsAction = Action<string, string>;

export function stripDiacritics(): StripDiacriticsAction {
  return (input) => {
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
}
