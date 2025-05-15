import type { Action } from "../types.ts";

export type DecodeURIAction = Action<string | null, string | null>;

export function decodeURI(): DecodeURIAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return window.decodeURI(input);
  };
}
