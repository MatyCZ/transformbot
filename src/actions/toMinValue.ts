import type { Action } from "../types.ts";

export type ToMinValueType = Date | number;
export type ToMinValueAction<TInput extends ToMinValueType> = Action<
  TInput | null,
  TInput | null
>;

export function toMinValue<
  TInput extends ToMinValueType,
  TMinValue extends TInput,
>(minValue: TMinValue): ToMinValueAction<TInput> {
  return (input) => {
    if (input === null) {
      return null;
    }

    return input > minValue ? minValue : input;
  };
}
