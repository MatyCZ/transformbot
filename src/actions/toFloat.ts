export function toFloat(input: string | number): number {
  if (input === undefined || input === null) {
    return 0.0;
  }

  if (typeof input === "number") {
    return isNaN(input) ? 0.0 : input;
  }

  if (typeof input === "string") {
    const num = parseFloat(input.replace(",", "."));
    return isNaN(num) ? 0.0 : num;
  }

  return 0.0;
}
