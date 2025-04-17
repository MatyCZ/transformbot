import type { InferTransformation, Transformation } from "../types.ts";

export function transform<TTransformation extends Transformation, TInput>(
  transformation: TTransformation,
  input: TInput,
): InferTransformation<TTransformation> {
  return transformation(input) as InferTransformation<TTransformation>;
}
