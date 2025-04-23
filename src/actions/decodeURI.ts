import type { Action } from "../types.ts";

export type DecodeURIAction = Action<string, string>;

export function decodeURI(): DecodeURIAction {
  return (input) => {
    return window.decodeURI(input);
  };
}
