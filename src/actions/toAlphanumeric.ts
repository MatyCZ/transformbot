import type { Action } from "../types.ts";

export type ToAlphanumericAction = Action<string | null, string | null>;

export function toAlphanumeric(ignore?: RegExp | string): ToAlphanumericAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    let ignorePattern = "";

    if (ignore) {
      if (ignore instanceof RegExp) {
        const ignoreRegex = ignore;

        return input.replace(new RegExp("[^a-zA-Z0-9]", "g"), (char: string) =>
          ignoreRegex.test(char) ? char : "",
        );
      } else {
        ignorePattern = ignore.replace(/[-\\\]^]/g, "\\$&");
      }
    }

    return input.replace(new RegExp(`[^a-zA-Z0-9${ignorePattern}]`, "g"), "");
  };
}
