export type Action<TInput = unknown, TOutput = unknown> = (
  input: TInput,
) => TOutput;
export type Schema<TInput = unknown, TOutput = unknown> = (
  input: TInput,
) => TOutput;

export type BooleanSchema = Schema<unknown, boolean>;
export type NumberSchema = Schema<unknown, number>;
export type StringSchema = Schema<unknown, string>;

export type InferSchemaOutput<TSchema> =
  TSchema extends Schema<unknown, infer TOutput> ? TOutput : never;
