import type { Action } from "../types.ts";

export type ToAlphaAction = Action<string | null, string | null>;

export interface ToAlphaOptions {
  ignore: RegExp | string;
}

export function toAlpha(options?: ToAlphaOptions): ToAlphaAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    const ignore = options?.ignore;

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
