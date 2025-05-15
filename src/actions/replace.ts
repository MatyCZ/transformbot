import type { Action } from "../types.ts";

export type ReplaceAction = Action<string | null, string | null>;

/**
 * @param searchValue A string or regular expression to search for.
 * @param replaceValue A string containing the text to replace. When the {@linkcode searchValue} is a `RegExp`, all matches are replaced if the `g` flag is set (or only those matches at the beginning, if the `y` flag is also present). Otherwise, only the first match of {@linkcode searchValue} is replaced.
 */
export function replace(
  searchValue: RegExp | string,
  replaceValue: string,
): ReplaceAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.replace(searchValue, replaceValue);
  };
}
