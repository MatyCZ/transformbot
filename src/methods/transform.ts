import {
  BooleanSchema,
  NumberSchema,
  StringSchema,
  InferSchemaOutput,
} from "../types.ts";

export function transform<
  TSchema extends BooleanSchema | NumberSchema | StringSchema,
  TInput,
>(schema: TSchema, input: TInput): InferSchemaOutput<TSchema> {
  return schema(input) as InferSchemaOutput<TSchema>;
}
