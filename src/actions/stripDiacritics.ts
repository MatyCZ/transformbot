import type { Action } from "../types.ts";

export type StripDiacriticsAction = Action<string | null, string | null>;

export function stripDiacritics(): StripDiacriticsAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
}
