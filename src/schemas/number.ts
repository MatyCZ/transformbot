import type { NumberSchema } from "../types.ts";

export function number(): NumberSchema {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return 0;
    }

    const num = Number(input);

    return isNaN(num) ? 0 : num;
  };
}
