import type { Action } from "../types.ts";
import { addLeadingZeros } from "../utils/addLeadingZeros.ts";

export type ToIsoDateAction = Action<Date | null, string | null>;

export function toIsoDate(): ToIsoDateAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    return (
      addLeadingZeros(input.getFullYear(), 4) +
      "-" +
      addLeadingZeros(input.getMonth() + 1, 2) +
      "-" +
      addLeadingZeros(input.getDate(), 2)
    );
  };
}
