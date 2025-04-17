import type { Action } from "../types.ts";

export type StripMultiSpacesAction = Action<string, string>;

export function stripMultiSpaces(): StripMultiSpacesAction {
  return (input) => {
    return input.replace(/\s\s+/, " ");
  };
}
