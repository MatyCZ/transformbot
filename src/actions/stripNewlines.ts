import type { Action } from "../types.ts";

export type StripNewlinesAction = Action<string, string>;

export function stripNewlines(): StripNewlinesAction {
  return (input) => {
    return input.replace(/\r?\n|\r/g, "");
  };
}
