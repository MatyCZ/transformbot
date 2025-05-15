import type { Action } from "../types.ts";

export type ToLocaleTimeStringAction = Action<Date | null, string | null>;

export function toLocaleTimeString(
  locales?: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions,
): ToLocaleTimeStringAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input.toLocaleTimeString(locales, options);
  };
}
