import type { Action } from "../types.ts";

export type StripMultiSpacesAction = Action<string | null, string | null>;

export function stripMultiSpaces(): StripMultiSpacesAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.replace(/\s\s+/, " ");
  };
}
