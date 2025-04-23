import type { Action } from "../types.ts";

export type ToAlphaAction = Action<string, string>;

export function toAlpha(ignore?: RegExp | string): ToAlphaAction {
  return (input) => {
    let ignorePattern = "";

    if (ignore) {
      if (ignore instanceof RegExp) {
        const ignoreRegex = ignore;

        return input.replace(new RegExp("[^a-zA-Z]", "g"), (char: string) =>
          ignoreRegex.test(char) ? char : "",
        );
      } else {
        ignorePattern = ignore.replace(/[-\\\]^]/g, "\\$&");
      }
    }

    return input.replace(new RegExp(`[^a-zA-Z${ignorePattern}]`, "g"), "");
  };
}
