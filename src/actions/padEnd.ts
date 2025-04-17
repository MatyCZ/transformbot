import type { Action } from "../types.ts";

export interface PadEndOptions {
  fillString?: string;
  maxLength: number;
}

export default function padEnd<TInput extends string, TOutput = TInput>(
  options: PadEndOptions,
): Action<TInput, TOutput> {
  return (input) => {
    return input.padEnd(options.maxLength, options.fillString) as TOutput;
  };
}
