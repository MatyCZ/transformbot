import type { StringSchema } from "../types.ts";

export function string(): StringSchema {
  return (input) => {
    if (input === null || input === undefined) {
      return "";
    }

    if (typeof input === "object") {
      return "";
    }

    return String(input);
  };
}
