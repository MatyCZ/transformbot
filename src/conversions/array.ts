import { Conversion, type Transformation } from "../types.ts";
import { transform } from "../methods/transform.ts";

export type ArrayConversion<TInput, TOutput> = Conversion<TInput, TOutput>;

export function array<T extends Transformation>(
  transformation: T,
): ArrayConversion<unknown, NonNullable<ReturnType<T>>[] | null> {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return null;
    }

    const values = [];
    if (Array.isArray(input)) {
      for (let key = 0; key < input.length; key++) {
        const value = transform(transformation, input[key]);

        if (value !== null && value !== undefined) {
          values.push(value as NonNullable<ReturnType<T>>);
        }
      }

      return values;
    }

    return null;
  };
}
