import type { Action } from "../types.ts";

export type StripNewlinesAction = Action<string | null, string | null>;

export function stripNewlines(): StripNewlinesAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.replace(/\r?\n|\r/g, "");
  };
}
