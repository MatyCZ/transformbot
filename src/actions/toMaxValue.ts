import type { Action } from "../types.ts";

export type ToMaxValueType = Date | number;
export type ToMaxValueAction<TInput extends ToMaxValueType> = Action<
  TInput | null,
  TInput | null
>;

export function toMaxValue<
  TInput extends ToMaxValueType,
  TMaxValue extends TInput,
>(maxValue: TMaxValue): ToMaxValueAction<TInput> {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input > maxValue ? maxValue : input;
  };
}
