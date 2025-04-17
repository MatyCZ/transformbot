import type { Action } from "../types.ts";

export type StripSpacesAction = Action<string, string>;

export function stripSpaces(): StripSpacesAction {
  return (input) => {
    return input.replace(/\s/g, "");
  };
}
