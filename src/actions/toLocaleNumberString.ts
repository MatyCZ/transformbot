import type { Action } from "../types.ts";

export type ToLocaleNumberAction = Action<number | null, string | null>;

export function toLocaleNumberString(
  locales?: Intl.LocalesArgument,
  options?: Intl.NumberFormatOptions,
): ToLocaleNumberAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.toLocaleString(locales, options);
  };
}
