import type { Action } from "../types.ts";

export type CustomAction<TInput, TOutput> = Action<TInput, TOutput>;

export function custom<TInput, TOutput>(
  operation: (input: TInput) => TOutput,
): CustomAction<TInput, TOutput> {
  return (input) => {
    if (typeof operation === "function") {
      return operation(input);
    }

    return input as unknown as TOutput;
  };
}
