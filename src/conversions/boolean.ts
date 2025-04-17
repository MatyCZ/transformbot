import { Conversion } from "../types.ts";

export type BooleanConversion = Conversion<unknown, boolean>;

export function boolean(): BooleanConversion {
  return (input) => {
    if (input === null || input === undefined) {
      return false;
    }

    if (typeof input === "string") {
      const lowered = input.trim().toLowerCase();

      if (lowered === "true" || lowered === "1" || lowered === "yes")
        return true;
      if (
        lowered === "false" ||
        lowered === "0" ||
        lowered === "no" ||
        lowered === ""
      )
        return false;
    }

    if (typeof input === "number" || typeof input === "boolean") {
      return Boolean(input);
    }

    throw new Error(`Cannot convert type ${typeof input} to boolean`);
  };
}
