import type { Action } from "../types.ts";

export type ToDefaultAction<TInput, TOutput> = Action<TInput, TOutput>;

export function toDefault<TInput, TDefault extends NonNullable<TInput>>(
  defaultValue: TDefault,
): ToDefaultAction<TInput, NonNullable<TInput>> {
  return (input) => {
    if (input === null) {
      return defaultValue as NonNullable<TInput>;
    }

    return input as NonNullable<TInput>;
  };
}
