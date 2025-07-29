import { describe, expect, it } from "vitest";
import { number } from "../../src/conversions/number.ts";
const convert = number();

// ARRAY
describe("Number conversions from array", () => {
  it("should convert array `[]` to null", () => {
    expect(convert([])).toBeNull();
  });
});

// BIGINT
describe("Number conversions from BigInt", () => {
  it("should convert BigInt `100` to number `100`", () => {
    expect(convert(BigInt(100))).toBe(100);
  });
});

// BOOLEAN
describe("Number conversions from boolean", () => {
  it("should convert boolean `true` to null", () => {
    expect(convert(true)).toBeNull();
  });

  it("should convert boolean `false` to null", () => {
    expect(convert(false)).toBeNull();
  });
});

// DATE
describe("Number conversions from Date", () => {
  it("should convert Date `` to null", () => {
    expect(convert(new Date())).toBeNull();
  });
});

// NULL
describe("Number conversions from null", () => {
  it("should convert null to null", () => {
    expect(convert(null)).toBeNull();
  });
});

// NUMBER
describe("Number conversions from number", () => {
  it("should convert number `0` to number `0`", () => {
    expect(convert(0)).toBe(0);
  });

  it("should convert number `1` to number `1`", () => {
    expect(convert(1)).toBe(1);
  });

  it("should convert number `-1` to number `-1`", () => {
    expect(convert(-1)).toBe(-1);
  });

  it("should convert number `123` to number `123`", () => {
    expect(convert(123)).toBe(123);
  });

  it("should convert number `-123` to number `-123`", () => {
    expect(convert(-123)).toBe(-123);
  });

  it("should convert number `569568000` to number `569568000`", () => {
    expect(convert(569568000)).toBe(569568000);
  });

  it("should convert number `-569568000` to number `-569568000`", () => {
    expect(convert(-569568000)).toBe(-569568000);
  });

  it("should convert number `1753786485` to number `1753786485`", () => {
    expect(convert(1753786485)).toBe(1753786485);
  });

  it("should convert number `-1753786485` to number `-1753786485`", () => {
    expect(convert(-1753786485)).toBe(-1753786485);
  });

  it("should convert number `1753786627409` to number `1753786627409`", () => {
    expect(convert(1753786627409)).toBe(1753786627409);
  });

  it("should convert number `-1753786627409` to number `-1753786627409`", () => {
    expect(convert(-1753786627409)).toBe(-1753786627409);
  });

  it("should convert number `1.5` to number `1.5`", () => {
    expect(convert(1.5)).toBe(1.5);
  });

  it("should convert number `-1.5` to number `-1.5`", () => {
    expect(convert(-1.5)).toBe(-1.5);
  });

  it("should convert number `1.234` to number `1.234`", () => {
    expect(convert(1.234)).toBe(1.234);
  });

  it("should convert number `-1.234` to  number `-1.234`", () => {
    expect(convert(-1.234)).toBe(-1.234);
  });

  it("should convert number `NaN` to null", () => {
    expect(convert(NaN)).toBeNull();
  });

  it("should convert number `Infinity` to number `Infinity`", () => {
    expect(convert(Infinity)).toBe(Infinity);
  });

  it("should convert number `-Infinity` to number `-Infinity`", () => {
    expect(convert(-Infinity)).toBe(-Infinity);
  });

  it("should convert number `Number.MAX_SAFE_INTEGER` to number `Number.MAX_SAFE_INTEGER`", () => {
    expect(convert(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
  });

  it("should convert number `Number.MIN_SAFE_INTEGER` to number `Number.MIN_SAFE_INTEGER`", () => {
    expect(convert(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
  });
});

// OBJECT
describe("Number conversions from object", () => {
  it("should convert object `{}` to null", () => {
    expect(convert({})).toBeNull();
  });
});

describe("Number conversions from string", () => {
  it("should convert string `` to null", () => {
    expect(convert("")).toBeNull();
  });

  it("should convert string `0` to number `0`", () => {
    expect(convert("0")).toBe(0);
  });

  it("should convert string `1` to number `1`", () => {
    expect(convert("1")).toBe(1);
  });

  it("should convert string `-1` to number `-1`", () => {
    expect(convert("-1")).toBe(-1);
  });

  it("should convert string `123` to number `123`", () => {
    expect(convert("123")).toBe(123);
  });

  it("should convert string `-123` to number `-123`", () => {
    expect(convert("-123")).toBe(-123);
  });

  it("should convert string `569568000` to number `569568000`", () => {
    expect(convert(569568000)).toBe(569568000);
  });

  it("should convert string `-569568000` to number `-569568000`", () => {
    expect(convert(-569568000)).toBe(-569568000);
  });

  it("should convert string `1753786485` to number `1753786485`", () => {
    expect(convert("1753786485")).toBe(1753786485);
  });

  it("should convert string `-1753786485` to number `-1753786485`", () => {
    expect(convert("-1753786485")).toBe(-1753786485);
  });

  it("should convert string `1753786627409` to number `1753786627409`", () => {
    expect(convert("1753786627409")).toBe(1753786627409);
  });

  it("should convert string `-1753786627409` to number `-1753786627409`", () => {
    expect(convert("-1753786627409")).toBe(-1753786627409);
  });

  it("should convert string `1 000 000` to number `1000000`", () => {
    expect(convert("1 000 000")).toBe(1000000);
  });

  it("should convert string `1.000.000` to null", () => {
    expect(convert("1.000.000")).toBeNull();
  });

  it("should convert string `1.5` to number `1.5`", () => {
    expect(convert("1.5")).toBe(1.5);
  });

  it("should convert string `-1.5` to number `-1.5`", () => {
    expect(convert("-1.5")).toBe(-1.5);
  });

  it("should convert string `1.234` to number `1.234`", () => {
    expect(convert("1.234")).toBe(1.234);
  });

  it("should convert string `-1.234` to number `-1.234`", () => {
    expect(convert("-1.234")).toBe(-1.234);
  });

  it("should convert string `1,5` to number `1.5`", () => {
    expect(convert("1,5")).toBe(1.5);
  });

  it("should convert string `-1,5` to number `-1.5`", () => {
    expect(convert("-1,5")).toBe(-1.5);
  });

  it("should convert string `1,234` to number `1.234`", () => {
    expect(convert("1,234")).toBe(1.234);
  });

  it("should convert string `-1,234` to number `-1.234`", () => {
    expect(convert("-1,234")).toBe(-1.234);
  });

  it("should convert string ` 789 ` to number `789`", () => {
    expect(convert(" 789 ")).toBe(789);
  });

  it("should convert string `abc` to null", () => {
    expect(convert("abc")).toBeNull();
  });

  it("should convert string `abc   xyz` to null", () => {
    expect(convert("abc   xyz")).toBeNull();
  });

  it("should convert string `!\"$ &'()*+,-./:;<=>?@[\\]^_`{|}~` to null", () => {
    expect(convert("abc   xyz")).toBeNull();
  });

  it("should convert string `false` to null", () => {
    expect(convert("false")).toBeNull();
  });

  it("should convert string `no` to null", () => {
    expect(convert("no")).toBeNull();
  });

  it("should convert string `true` to null", () => {
    expect(convert("true")).toBeNull();
  });

  it("should convert string `yes` to null", () => {
    expect(convert("yes")).toBeNull();
  });

  it("should convert string `18.09.2020` to null", () => {
    expect(convert("18.09.2020")).toBeNull();
  });

  it("should convert string `18.09.2020 18:19` to null", () => {
    expect(convert("18.09.2020 18:19")).toBeNull();
  });

  it("should convert string `1.9.2020 3:4:5` to null", () => {
    expect(convert("1.9.2020 3:4:5")).toBeNull();
  });

  it("should convert string `18.09.2020 01:09:05` to null", () => {
    expect(convert("18.09.2020 01:09:05")).toBeNull();
  });

  it("should convert string `07/29/2025` to null", () => {
    expect(convert("07/29/2025")).toBeNull();
  });

  it("should convert string `07/29/2025 13:57` to null", () => {
    expect(convert("07/29/2025 13:57")).toBeNull();
  });

  it("should convert string `07/29/2025 02:01:09` to null", () => {
    expect(convert("07/29/2025 02:01:09")).toBeNull();
  });

  it("should convert string `07/29/2025 2:1` to null", () => {
    expect(convert("07/29/2025 2:1")).toBeNull();
  });

  it("should convert string `07/29/2025 2:1:9` to null", () => {
    expect(convert("07/29/2025 2:1:9")).toBeNull();
  });

  it("should convert string `1990-05-01` to null", () => {
    expect(convert("1990-05-01")).toBeNull();
  });

  it("should convert string `1990-05-01 07:15` to null", () => {
    expect(convert("1990-05-01 07:15")).toBeNull();
  });

  it("should convert string `1990-05-01 07:15:09` to null", () => {
    expect(convert("1990-05-01 07:15:09")).toBeNull();
  });

  it("should convert string `1990-05-01 7:5` to null", () => {
    expect(convert("1990-05-01 7:5")).toBeNull();
  });

  it("should convert string `1990-05-01 7:5:0` to null", () => {
    expect(convert("1990-05-01 7:5:0")).toBeNull();
  });

  it("should convert string `1990-05-01` to null", () => {
    expect(convert("1990-05-01")).toBeNull();
  });

  it("should convert string `1987-12-11T04:25:15Z` to null", () => {
    expect(convert("1987-12-11T04:25:15Z")).toBeNull();
  });

  it("should convert string `2018-04-04T16:00:00.000Z` to null", () => {
    expect(convert("2018-04-04T16:00:00.000Z")).toBeNull();
  });

  it("should convert string `2018-04-13 19:18:17.040+02:00` to null", () => {
    expect(convert("2018-04-13 19:18:17.040+02:00")).toBeNull();
  });

  it("should convert string `18. 9. 2020` to null", () => {
    expect(convert("18. 9. 2020")).toBeNull();
  });
});

// UNDEFINED
describe("Number conversions from undefined", () => {
  it("should convert undefined to null", () => {
    expect(convert(undefined)).toBeNull();
  });
});
