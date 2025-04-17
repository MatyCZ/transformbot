import type { Action } from "../types.ts";

export type StripTagsAction = Action<string, string>;

export function stripTags(): StripTagsAction {
  return (input) => {
    return input.replace(/(<([^>]+)>)/gi, "");
  };
}
