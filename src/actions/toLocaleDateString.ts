import type { Action } from "../types.ts";

export type ToLocaleDateAction = Action<Date | null, string | null>;

export function toLocaleDateString(
  locales?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions,
): ToLocaleDateAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.toLocaleDateString(locales, options);
  };
}
