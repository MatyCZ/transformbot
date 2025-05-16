import type { Action } from "../types.ts";

export type ToDefaultAction<TInput, TOutput> = Action<TInput, TOutput>;

export function toDefault<TInput, TOutput extends NonNullable<TInput>>(
  defaultValue: TOutput,
): ToDefaultAction<TInput, NonNullable<TInput>> {
  return (input) => {
    if (input === null) {
      return defaultValue as TOutput;
    }

    return input as TOutput;
  };
}
