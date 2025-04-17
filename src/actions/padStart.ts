import type { Action } from "../types.ts";

export interface PadStartOptions {
  fillString?: string;
  maxLength: number;
}

export default function padStart<TInput extends string, TOutput = TInput>(
  options: PadStartOptions,
): Action<TInput, TOutput> {
  return (input) => {
    return input.padStart(options.maxLength, options.fillString) as TOutput;
  };
}
