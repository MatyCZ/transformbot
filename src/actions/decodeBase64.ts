import type { Action } from "../types.ts";

export type DecodeBase64Action = Action<string | null, string | null>;

/**
 * Decodes an input Base64 string back to a normal text.
 */
export function decodeBase64(): DecodeBase64Action {
  return (input) => {
    if (input === null) {
      return null;
    }

    try {
      if (typeof atob === "function") {
        return atob(input);
      } else if (typeof Buffer !== "undefined") {
        return Buffer.from(input, "base64").toString();
      } else {
        throw new Error("Environment does not support Base64 decoding");
      }
    } catch {
      return input;
    }
  };
}
