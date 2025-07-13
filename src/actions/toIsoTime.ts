import type { Action } from "../types.ts";
import { addLeadingZeros } from "../utils/addLeadingZeros.ts";

export type ToIsoTimeAction = Action<Date | null, string | null>;

export interface ToTimeStringOptions {
  useSeconds?: boolean;
  useMiliseconds?: boolean;
}

export function toIsoTime(options?: ToTimeStringOptions): ToIsoTimeAction {
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
