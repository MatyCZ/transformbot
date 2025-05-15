import type { Action } from "../types.ts";

export type ToIntegerAction = Action<boolean | number | string | null, number>;

export function toInteger(): ToIntegerAction {
  return (input) => {
    if (input === null || input === undefined || input === "") {
      return 0;
    }

    if (typeof input === "boolean") {
      return input ? 1 : 0;
    }

    const num =
      typeof input === "string"
        ? parseFloat(input as string)
        : (input as number);

    return isNaN(num) ? 0 : Math.trunc(num);
  };
}
