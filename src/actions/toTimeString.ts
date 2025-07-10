import type { Action } from "../types.ts";
import { addLeadingZeros } from "../utils/addLeadingZeros.ts";

export type ToTimeStringAction = Action<Date | null, string | null>;

export interface ToTimeStringOptions {
  useSeconds?: boolean;
  useMiliseconds?: boolean;
}

export function toTimeString(
  options?: ToTimeStringOptions,
): ToTimeStringAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    let output =
      addLeadingZeros(input.getHours(), 2) +
      ":" +
      addLeadingZeros(input.getMinutes(), 2);

    if (options?.useSeconds) {
      output += ":" + addLeadingZeros(input.getSeconds(), 2);
    }

    if (options?.useMiliseconds) {
      output += "." + addLeadingZeros(input.getMilliseconds(), 3);
    }

    return output;
  };
}
