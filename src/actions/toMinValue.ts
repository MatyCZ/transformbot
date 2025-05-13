import type { Action } from "../types.ts";

export type ToMinValueType = Date | number;
export type ToMinValueAction<TInput extends ToMinValueType> = Action<
  TInput,
  TInput
>;

export function toMinValue<
  TInput extends ToMinValueType,
  TMinValue extends TInput,
>(minValue: TMinValue): ToMinValueAction<TInput> {
  return (input) => {
    return input > minValue ? minValue : input;
  };
}
