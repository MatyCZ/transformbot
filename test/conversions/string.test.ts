import { describe, expect, it } from "vitest";
import { string } from "../../src/conversions/string.ts";

const convert = string();

// ARRAY
describe("String conversions from array", () => {
  it("should convert array `[]` to null", () => {
    expect(convert([])).toBeNull();
  });
});

// BIGINT
describe("String conversions from BigInt", () => {
  it("should convert BigInt `100` to null", () => {
    expect(convert(BigInt(100))).toBeNull();
  });
});

// BOOLEAN
describe("String conversions from boolean", () => {
  it("should convert boolean `true` to null", () => {
    expect(convert(true)).toBeNull();
  });

  it("should convert boolean `false` to null", () => {
    expect(convert(false)).toBeNull();
  });
});

// DATE
describe("String conversions from Date", () => {
  it("should convert Date to null", () => {
    expect(convert(new Date())).toBeNull();
  });
});

// NULL
describe("String conversions from null", () => {
  it("should convert null to null", () => {
    expect(convert(null)).toBeNull();
  });
});

// NUMBER
describe("String conversions from number", () => {
  it("should convert number `0` to string `0`", () => {
    expect(convert(0)).toBe("0");
  });

  it("should convert number `1` to string `1`", () => {
    expect(convert(1)).toBe("1");
  });

  it("should convert number `-1` to string `-1`", () => {
    expect(convert(-1)).toBe("-1");
  });

  it("should convert number `123` to string `123`", () => {
    expect(convert(123)).toBe("123");
  });

  it("should convert number `-123` to string `-123`", () => {
    expect(convert(-123)).toBe("-123");
  });

  it("should convert number `569568000` to string `569568000`", () => {
    expect(convert(569568000)).toBe("569568000");
  });

  it("should convert number `-569568000` to string `-569568000`", () => {
    expect(convert(-569568000)).toBe("-569568000");
  });

  it("should convert number `1753786485` to string `1753786485`", () => {
    expect(convert(1753786485)).toBe("1753786485");
  });

  it("should convert number `-1753786485` to string `-1753786485`", () => {
    expect(convert(-1753786485)).toBe("-1753786485");
  });

  it("should convert number `1753786627409` to string `1753786627409`", () => {
    expect(convert(1753786627409)).toBe("1753786627409");
  });

  it("should convert number `-1753786627409` to string `-1753786627409`", () => {
    expect(convert(-1753786627409)).toBe("-1753786627409");
  });

  it("should convert number `1.5` to string `1.5`", () => {
    expect(convert(1.5)).toBe("1.5");
  });

  it("should convert number `-1.5` to string `-1.5`", () => {
    expect(convert(-1.5)).toBe("-1.5");
  });

  it("should convert number `1.234` to string `1.234`", () => {
    expect(convert(1.234)).toBe("1.234");
  });

  it("should convert number `-1.234` to  string `-1.234`", () => {
    expect(convert(-1.234)).toBe("-1.234");
  });

  it("should convert number `NaN` to null", () => {
    expect(convert(NaN)).toBeNull();
  });

  it("should convert number `Infinity` to number `Infinity`", () => {
    expect(convert(Infinity)).toBe(String(Infinity));
  });

  it("should convert number `-Infinity` to number `-Infinity`", () => {
    expect(convert(-Infinity)).toBe(String(-Infinity));
  });

  it("should convert number `Number.MAX_SAFE_INTEGER` to number `Number.MAX_SAFE_INTEGER`", () => {
    expect(convert(Number.MAX_SAFE_INTEGER)).toBe(
      String(Number.MAX_SAFE_INTEGER),
    );
  });

  it("should convert number `Number.MIN_SAFE_INTEGER` to number `Number.MIN_SAFE_INTEGER`", () => {
    expect(convert(Number.MIN_SAFE_INTEGER)).toBe(
      String(Number.MIN_SAFE_INTEGER),
    );
  });
});

// OBJECT
describe("String conversions from object", () => {
  it("should convert object `{}` to null", () => {
    expect(convert({})).toBeNull();
  });
});

describe("String conversions from string", () => {
  it("should convert string `` to string ``", () => {
    expect(convert("")).toBe("");
  });

  it("should convert string `0` to string `0`", () => {
    expect(convert("0")).toBe("0");
  });

  it("should convert string `1` to string `1`", () => {
    expect(convert("1")).toBe("1");
  });

  it("should convert string `-1` to string `-1`", () => {
    expect(convert("-1")).toBe("-1");
  });

  it("should convert string `123` to string `123`", () => {
    expect(convert("123")).toBe("123");
  });

  it("should convert string `-123` to string `-123`", () => {
    expect(convert("-123")).toBe("-123");
  });

  it("should convert string `456` to string `456`", () => {
    expect(convert("456")).toBe("456");
  });

  it("should convert string `569568000` to string `569568000`", () => {
    expect(convert("569568000")).toBe("569568000");
  });

  it("should convert string `-569568000` to string `-569568000`", () => {
    expect(convert("-569568000")).toBe("-569568000");
  });

  it("should convert string `1753786485` to string `1753786485`", () => {
    expect(convert("1753786485")).toBe("1753786485");
  });

  it("should convert string `-1753786485` to string `-1753786485`", () => {
    expect(convert("-1753786485")).toBe("-1753786485");
  });

  it("should convert string `1753786627409` to string `1753786627409`", () => {
    expect(convert("1753786627409")).toBe("1753786627409");
  });

  it("should convert string `-1753786627409` to string `-1753786627409`", () => {
    expect(convert("-1753786627409")).toBe("-1753786627409");
  });

  it("should convert string `1 000 000` to string `1 000 000`", () => {
    expect(convert("1 000 000")).toBe("1 000 000");
  });

  it("should convert string `1.000.000` to string `1.000.000`", () => {
    expect(convert("1.000.000")).toBe("1.000.000");
  });

  it("should convert string `1.5` to string `1.5`", () => {
    expect(convert("1.5")).toBe("1.5");
  });

  it("should convert string `-1.5` to string `-1.5`", () => {
    expect(convert("-1.5")).toBe("-1.5");
  });

  it("should convert string `1.234` to string `1.234`", () => {
    expect(convert("1.234")).toBe("1.234");
  });

  it("should convert string `-1.234` to string `-1.234`", () => {
    expect(convert("-1.234")).toBe("-1.234");
  });

  it("should convert string `1,5` to string `1,5`", () => {
    expect(convert("1,5")).toBe("1,5");
  });

  it("should convert string `-1,5` to string `-1,5`", () => {
    expect(convert("-1,5")).toBe("-1,5");
  });

  it("should convert string `1,234` to string `1,234`", () => {
    expect(convert("1,234")).toBe("1,234");
  });

  it("should convert string `-1,234` to string `-1,234`", () => {
    expect(convert("-1,234")).toBe("-1,234");
  });

  it("should convert string ` 789 ` to string ` 789 `", () => {
    expect(convert(" 789 ")).toBe(" 789 ");
  });

  it("should convert string `abc` to string `abc`", () => {
    expect(convert("abc")).toBe("abc");
  });

  it("should convert string `abc   xyz` to string `abc   xyz`", () => {
    expect(convert("abc   xyz")).toBe("abc   xyz");
  });

  it("should convert string `!\"$ &'()*+,-./:;<=>?@[\\]^_`{|}~` to string `!\"$ &'()*+,-./:;<=>?@[\\]^_`{|}~`", () => {
    expect(convert("!\"$ &'()*+,-./:;<=>?@[\\]^_`{|}~")).toBe(
      "!\"$ &'()*+,-./:;<=>?@[\\]^_`{|}~",
    );
  });

  it("should convert string `false` to string `false`", () => {
    expect(convert("false")).toBe("false");
  });

  it("should convert string `no` to string `no`", () => {
    expect(convert("no")).toBe("no");
  });

  it("should convert string `true` to string `true`", () => {
    expect(convert("true")).toBe("true");
  });

  it("should convert string `yes` to string `yes`", () => {
    expect(convert("yes")).toBe("yes");
  });

  it("should convert string `18.09.2020` to  string `18.09.2020`", () => {
    expect(convert("18.09.2020")).toBe("18.09.2020");
  });

  it("should convert string `18.09.2020 18:19` to  string `18.09.2020 18:19`", () => {
    expect(convert("18.09.2020 18:19")).toBe("18.09.2020 18:19");
  });

  it("should convert string `1.9.2020 3:4:5` to  string `1.9.2020 3:4:5`", () => {
    expect(convert("1.9.2020 3:4:5")).toBe("1.9.2020 3:4:5");
  });

  it("should convert string `18.09.2020 01:09:05` to  string `18.09.2020 01:09:05`", () => {
    expect(convert("18.09.2020 01:09:05")).toBe("18.09.2020 01:09:05");
  });

  it("should convert string `07/29/2025` to  string `07/29/2025`", () => {
    expect(convert("07/29/2025")).toBe("07/29/2025");
  });

  it("should convert string `07/29/2025 13:57` to  string `07/29/2025 13:57`", () => {
    expect(convert("07/29/2025 13:57")).toBe("07/29/2025 13:57");
  });

  it("should convert string `07/29/2025 02:01:09` to  string `07/29/2025 02:01:09`", () => {
    expect(convert("07/29/2025 02:01:09")).toBe("07/29/2025 02:01:09");
  });

  it("should convert string `07/29/2025 2:1` to  string `07/29/2025 2:1`", () => {
    expect(convert("07/29/2025 2:1")).toBe("07/29/2025 2:1");
  });

  it("should convert string `07/29/2025 2:1:9` to  string `07/29/2025 2:1:9`", () => {
    expect(convert("07/29/2025 2:1:9")).toBe("07/29/2025 2:1:9");
  });

  it("should convert string `1990-05-01` to  string `1990-05-01`", () => {
    expect(convert("1990-05-01")).toBe("1990-05-01");
  });

  it("should convert string `1990-05-01 07:15` to  string `1990-05-01 07:15`", () => {
    expect(convert("1990-05-01 07:15")).toBe("1990-05-01 07:15");
  });

  it("should convert string `1990-05-01 07:15:09` to  string `1990-05-01 07:15:09`", () => {
    expect(convert("1990-05-01 07:15:09")).toBe("1990-05-01 07:15:09");
  });

  it("should convert string `1990-05-01 7:5` to  string `1990-05-01 7:5`", () => {
    expect(convert("1990-05-01 7:5")).toBe("1990-05-01 7:5");
  });

  it("should convert string `1990-05-01 7:5:0` to  string `1990-05-01 7:5:0`", () => {
    expect(convert("1990-05-01 7:5:0")).toBe("1990-05-01 7:5:0");
  });

  it("should convert string `1990-05-01` to  string `1990-05-01`", () => {
    expect(convert("1990-05-01")).toBe("1990-05-01");
  });

  it("should convert string `1987-12-11T04:25:15Z` to  string `1987-12-11T04:25:15Z`", () => {
    expect(convert("1987-12-11T04:25:15Z")).toBe("1987-12-11T04:25:15Z");
  });

  it("should convert string `2018-04-04T16:00:00.000Z` to  string `2018-04-04T16:00:00.000Z`", () => {
    expect(convert("2018-04-04T16:00:00.000Z")).toBe(
      "2018-04-04T16:00:00.000Z",
    );
  });

  it("should convert string `2018-04-13 19:18:17.040+02:00` to  string `2018-04-13 19:18:17.040+02:00`", () => {
    expect(convert("2018-04-13 19:18:17.040+02:00")).toBe(
      "2018-04-13 19:18:17.040+02:00",
    );
  });

  it("should convert string `18. 9. 2020` to string `18. 9. 2020`", () => {
    expect(convert("18. 9. 2020")).toBe("18. 9. 2020");
  });
});

// UNDEFINED
describe("String conversions from undefined", () => {
  it("should convert undefined to null", () => {
    expect(convert(undefined)).toBeNull();
  });
});
