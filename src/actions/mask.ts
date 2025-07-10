import type { Action } from "../types.ts";

export type MaskAction = Action<string | null, string | null>;

export interface MaskOptions {
  keepPrefix?: number; // Number of characters at the beginning that will remain visible
  keepSuffix?: number; // Number of characters at the end that will remain visible
  maskCharacter?: string; // Character that will replace the masked characters (default is '*')
}

/**
 * Masks part of a string by replacing characters with a chosen masking character.
 */
export function mask(options: MaskOptions): MaskAction {
  return (input) => {
    if (input === null) {
      return null;
    }

    const keepPrefix = options?.keepPrefix ?? 0;
    const keepSuffix = options?.keepSuffix ?? 0;
    const maskCharacter = options?.maskCharacter ?? "*";

    if (input.length <= keepPrefix + keepSuffix) {
      return input;
    }

    const prefix = input.substring(0, keepPrefix);
    const suffix =
      keepSuffix > 0 ? input.substring(input.length - keepSuffix) : "";

    const maskedLength = input.length - keepPrefix - keepSuffix;
    const maskedPart = maskCharacter.repeat(maskedLength);

    return prefix + maskedPart + suffix;
  };
}
