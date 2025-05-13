export function addLeadingZeros(value: number, length: number): string {
  let val = value.toString();

  while (val.length < length) {
    val = "0" + val;
  }

  return val;
}
