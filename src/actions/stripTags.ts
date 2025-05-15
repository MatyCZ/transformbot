import type { Action } from "../types.ts";

export type StripTagsAction = Action<string | null, string | null>;

export function stripTags(): StripTagsAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.replace(/(<([^>]+)>)/gi, "");
  };
}
