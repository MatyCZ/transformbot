import type { Action } from "../types.ts";

export type ToDefaultAction<TInput, TOutput> = Action<TInput, TOutput>;

export function toDefault<
  TInput extends Date | boolean | number | string | null,
  TOutput extends NonNullable<TInput>,
>(
  defaultValue: TOutput,
): ToDefaultAction<TInput, TOutput | NonNullable<TInput>> {
  return (input) => {
    if (input === null) {
      return defaultValue;
    }

    return input as TOutput;
  };
}
