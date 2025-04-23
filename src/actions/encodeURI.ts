import type { Action } from "../types.ts";

export type EncodeURIAction = Action<string, string>;

export function encodeURI(): EncodeURIAction {
  return (input) => {
    return window.encodeURI(input);
  };
}
