import type { Action } from "../types.ts";

export type CustomAction<TInput, TOutput> = Action<TInput, TOutput>;

export function custom<
  TInput extends Date | boolean | number | string | null,
  TOutput = TInput,
>(operation: (input: TInput) => TOutput): CustomAction<TInput, TOutput> {
  return (input) => operation(input);
}
