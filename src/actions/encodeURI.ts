import type { Action } from "../types.ts";

export type EncodeURIAction = Action<string | null, string | null>;

export function encodeURI(): EncodeURIAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return window.encodeURI(input);
  };
}
