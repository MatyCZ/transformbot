import type { Action } from "../types.ts";

export type EncodeBase64Action = Action<string | null, string | null>;

/**
 * Encodes the input string to Base64 format.
 */
export function encodeBase64(): EncodeBase64Action {
  return (input) => {
    if (input === null) {
      return null;
    }

    // Použití Buffer pro Node.js nebo btoa pro prohlížeče
    if (typeof btoa === "function") {
      return btoa(input);
    } else if (typeof Buffer !== "undefined") {
      return Buffer.from(input).toString("base64");
    } else {
      throw new Error("Environment does not support Base64 encoding");
    }
  };
}
