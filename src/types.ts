export type Action<TInput = unknown, TOutput = unknown> = (
  input: TInput,
) => TOutput;
export type Conversion<TInput = unknown, TOutput = unknown> = (
  input: TInput,
) => TOutput;

export type Transformation<TInput = unknown, TOutput = unknown> =
  | Action<TInput, TOutput>
  | Conversion<TInput, TOutput>;

export type InferTransformation<TTransformation> =
  TTransformation extends Transformation<unknown, infer TOutput>
    ? TOutput
    : never;
