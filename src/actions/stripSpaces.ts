import type { Action } from "../types.ts";

export type StripSpacesAction = Action<string | null, string | null>;

export function stripSpaces(): StripSpacesAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.replace(/\s/g, "");
  };
}
