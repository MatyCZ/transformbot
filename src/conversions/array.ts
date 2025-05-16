import { Conversion, type Transformation } from "../types.ts";
import { transform } from "../methods/transform.ts";

export type ArrayConversion = Conversion<unknown, unknown[] | null>;

export function array<T extends Transformation>(
  transformation: T,
): Conversion<unknown, NonNullable<ReturnType<T>>[] | null> {
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

      return values.length > 0 ? values : null;
    }

    return null;
  };
}
