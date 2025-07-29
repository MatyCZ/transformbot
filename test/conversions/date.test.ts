import { describe, expect, it } from "vitest";
import { date } from "../../src/conversions/date.ts";

const convert = date();

// ARRAY
describe("Date conversions from array", () => {
  it("should convert array `[]` to null", () => {
    expect(convert([])).toBeNull();
  });
});

// BIGINT
describe("Date conversions from BigInt", () => {
  it("should convert BigInt `100` to null", () => {
    expect(convert(BigInt(100))).toBeNull();
  });
});

// BOOLEAN
describe("Date conversions from boolean", () => {
  it("should convert boolean `true` to null", () => {
    expect(convert(true)).toBeNull();
  });

  it("should convert boolean `false` to null", () => {
    expect(convert(false)).toBeNull();
  });
});

// DATE
describe("Date conversions from Date", () => {
  it("should convert Date to Date", () => {
    const date = new Date();

    expect(convert(date)).toBe(date);
  });
});

// NULL
describe("Date conversions from null", () => {
  it("should convert null to null", () => {
    expect(convert(null)).toBeNull();
  });
});

// NUMBER
describe("Date conversions from number", () => {
  it("should convert number `0` to null", () => {
    expect(convert(0)).toBeNull();
  });

  it("should convert number `1` to null", () => {
    expect(convert(1)).toBeNull();
  });

  it("should convert number `-1` to null", () => {
    expect(convert(-1)).toBeNull();
  });

  it("should convert number `123` to null", () => {
    expect(convert(123)).toBeNull();
  });

  it("should convert number `-123` to null", () => {
    expect(convert(-123)).toBeNull();
  });

  it("should convert number `569568000` to null", () => {
    expect(convert(569568000)).toBeNull();
  });

  it("should convert number `-569568000` to null", () => {
    expect(convert(-569568000)).toBeNull();
  });

  it("should convert number `1753786485` to Date `2025-07-29T10:54:45.000Z`", () => {
    expect(convert(1753786485)).toStrictEqual(
      new Date("2025-07-29T10:54:45.000Z"),
    );
  });

  it("should convert number `-1753786485` to Date `1914-06-05T13:05:15.000Z`", () => {
    expect(convert(-1753786485)).toStrictEqual(
      new Date("1914-06-05T13:05:15.000Z"),
    );
  });

  it("should convert number `1753786627409` to Date `2025-07-29T10:57:07.409Z`", () => {
    expect(convert(1753786627409)).toStrictEqual(
      new Date("2025-07-29T10:57:07.409Z"),
    );
  });

  it("should convert number `-1753786627409` to Date `1914-06-05T13:02:52.591Z`", () => {
    expect(convert(-1753786627409)).toStrictEqual(
      new Date("1914-06-05T13:02:52.591Z"),
    );
  });

  it("should convert number `1.5` to null", () => {
    expect(convert(1.5)).toBeNull();
  });

  it("should convert number `-1.5` to null", () => {
    expect(convert(-1.5)).toBeNull();
  });

  it("should convert number `1.234` to null", () => {
    expect(convert(1.234)).toBeNull();
  });

  it("should convert number `-1.234` to null", () => {
    expect(convert(-1.234)).toBeNull();
  });

  it("should convert number `NaN` to null", () => {
    expect(convert(NaN)).toBeNull();
  });

  it("should convert number `Infinity` to null", () => {
    expect(convert(Infinity)).toBeNull();
  });

  it("should convert number `-Infinity` to null", () => {
    expect(convert(-Infinity)).toBeNull();
  });

  it("should convert number `Number.MAX_SAFE_INTEGER` to null", () => {
    expect(convert(Number.MAX_SAFE_INTEGER)).toBeNull();
  });

  it("should convert number `Number.MIN_SAFE_INTEGER` to null", () => {
    expect(convert(Number.MIN_SAFE_INTEGER)).toBeNull();
  });
});

// OBJECT
describe("Date conversions from object", () => {
  it("should convert object `{}` to null", () => {
    expect(convert({})).toBeNull();
  });
});

// STRING
describe("Date conversions from string", () => {
  it("should convert string `` to null", () => {
    expect(convert("")).toBeNull();
  });

  it("should convert string `0` to null", () => {
    expect(convert("0")).toBeNull();
  });

  it("should convert string `1` to null", () => {
    expect(convert("1")).toBeNull();
  });

  it("should convert string `-1` to null", () => {
    expect(convert("-1")).toBeNull();
  });

  it("should convert string `123` to null", () => {
    expect(convert("123")).toBeNull();
  });

  it("should convert string `-123` to null", () => {
    expect(convert("-123")).toBeNull();
  });

  it("should convert string `569568000` to null", () => {
    expect(convert("569568000")).toBeNull();
  });

  it("should convert string `-569568000` to null", () => {
    expect(convert("-569568000")).toBeNull();
  });

  it("should convert string `1753786485` to Date `2025-07-29T10:54:45.000Z`", () => {
    expect(convert("1753786485")).toStrictEqual(
      new Date("2025-07-29T10:54:45.000Z"),
    );
  });

  it("should convert string `-1753786485` to Date `1914-06-05T13:05:15.000Z`", () => {
    expect(convert("-1753786485")).toStrictEqual(
      new Date("1914-06-05T13:05:15.000Z"),
    );
  });

  it("should convert string `1753786627409` to Date `2025-07-29T10:57:07.409Z`", () => {
    expect(convert("1753786627409")).toStrictEqual(
      new Date("2025-07-29T10:57:07.409Z"),
    );
  });

  it("should convert string `-1753786627409` to Date `1914-06-05T13:02:52.591Z`", () => {
    expect(convert("-1753786627409")).toStrictEqual(
      new Date("1914-06-05T13:02:52.591Z"),
    );
  });

  it("should convert string `1 000 000` to null", () => {
    expect(convert("1 000 000")).toBeNull();
  });

  it("should convert string `1.000.000` to null", () => {
    expect(convert("1.000.000")).toBeNull();
  });

  it("should convert string `1.5` to null", () => {
    expect(convert("1.5")).toBeNull();
  });

  it("should convert string `-1.5` to null", () => {
    expect(convert("-1.5")).toBeNull();
  });

  it("should convert string `1.234` to null", () => {
    expect(convert("1.234")).toBeNull();
  });

  it("should convert string `-1.234` to null", () => {
    expect(convert("-1.234")).toBeNull();
  });

  it("should convert string `1,5` to null", () => {
    expect(convert("1,5")).toBeNull();
  });

  it("should convert string `-1,5` to null", () => {
    expect(convert("-1,5")).toBeNull();
  });

  it("should convert string `1,234` to null", () => {
    expect(convert("1,234")).toBeNull();
  });

  it("should convert string `-1,234` to null", () => {
    expect(convert("-1,234")).toBeNull();
  });

  it("should convert string ` 789 ` to null", () => {
    expect(convert(" 789 ")).toBeNull();
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

  it("should convert string `18.09.2020` to Date `2020-09-18T00:00:00.000Z`", () => {
    expect(convert("18.09.2020")).toStrictEqual(
      new Date("2020-09-18T00:00:00.000Z"),
    );
  });

  it("should convert string `18.09.2020 18:19` to Date `2020-09-18T16:19:00.000Z`", () => {
    expect(convert("18.09.2020 18:19")).toStrictEqual(
      new Date("2020-09-18T16:19:00.000Z"),
    );
  });

  it("should convert string `1.9.2020 3:4:5` to Date `2020-09-01T01:04:05.000Z`", () => {
    expect(convert("1.9.2020 3:4:5")).toStrictEqual(
      new Date("2020-09-01T01:04:05.000Z"),
    );
  });

  it("should convert string `18.09.2020 01:09:05` to Date `2020-09-17T23:09:05.000Z`", () => {
    expect(convert("18.09.2020 01:09:05")).toStrictEqual(
      new Date("2020-09-17T23:09:05.000Z"),
    );
  });

  it("should convert string `07/29/2025` to Date `2025-07-29T00:00:00.000Z`", () => {
    expect(convert("07/29/2025")).toStrictEqual(
      new Date("2025-07-29T00:00:00.000Z"),
    );
  });

  it("should convert string `07/29/2025 13:57` to Date `2025-07-29T11:57:00.000Z`", () => {
    expect(convert("07/29/2025 13:57")).toStrictEqual(
      new Date("2025-07-29T11:57:00.000Z"),
    );
  });

  it("should convert string `07/29/2025 02:01:09` to Date `2025-07-29T00:01:09.000Z`", () => {
    expect(convert("07/29/2025 02:01:09")).toStrictEqual(
      new Date("2025-07-29T00:01:09.000Z"),
    );
  });

  it("should convert string `07/29/2025 2:1` to Date `2025-07-29T00:01:00.000Z`", () => {
    expect(convert("07/29/2025 2:1")).toStrictEqual(
      new Date("2025-07-29T00:01:00.000Z"),
    );
  });

  it("should convert string `07/29/2025 2:1:9` to Date `2025-07-29T00:01:09.000Z`", () => {
    expect(convert("07/29/2025 2:1:9")).toStrictEqual(
      new Date("2025-07-29T00:01:09.000Z"),
    );
  });

  it("should convert string `1990-05-01` to Date `1990-05-01T00:00:00.000Z`", () => {
    expect(convert("1990-05-01")).toStrictEqual(
      new Date("1990-05-01T00:00:00.000Z"),
    );
  });

  it("should convert string `1990-05-01 07:15` to Date `1990-05-01T05:15:00.000Z`", () => {
    expect(convert("1990-05-01 07:15")).toStrictEqual(
      new Date("1990-05-01T05:15:00.000Z"),
    );
  });

  it("should convert string `1990-05-01 07:15:09` to Date `1990-05-01T05:15:09.000Z`", () => {
    expect(convert("1990-05-01 07:15:09")).toStrictEqual(
      new Date("1990-05-01T05:15:09.000Z"),
    );
  });

  it("should convert string `1990-05-01 7:5` to Date `1990-05-01T05:05:00.000Z`", () => {
    expect(convert("1990-05-01 7:5")).toStrictEqual(
      new Date("1990-05-01T05:05:00.000Z"),
    );
  });

  it("should convert string `1990-05-01 7:5:0` to Date `1990-05-01T05:05:00.000Z`", () => {
    expect(convert("1990-05-01 7:5:0")).toStrictEqual(
      new Date("1990-05-01T05:05:00.000Z"),
    );
  });

  it("should convert string `1990-05-01` to Date `1990-05-01Z00:00:00.000Z`", () => {
    expect(convert("1990-05-01")).toStrictEqual(
      new Date("1990-05-01Z00:00:00.000Z"),
    );
  });

  it("should convert string `1987-12-11T04:25:15Z` to Date `1987-12-11T04:25:15.000Z`", () => {
    expect(convert("1987-12-11T04:25:15Z")).toStrictEqual(
      new Date("1987-12-11T04:25:15.000Z"),
    );
  });

  it("should convert string `2018-04-04T16:00:00.000Z` to Date `2018-04-04T16:00:00.000Z`", () => {
    expect(convert("2018-04-04T16:00:00.000Z")).toStrictEqual(
      new Date("2018-04-04T16:00:00.000Z"),
    );
  });

  it("should convert string `2018-04-13 19:18:17.040+02:00` to Date `2018-04-13T17:18:17.040Z`", () => {
    expect(convert("2018-04-13 19:18:17.040+02:00")).toStrictEqual(
      new Date("2018-04-13T17:18:17.040Z"),
    );
  });

  it("should convert string `18. 9. 2020` to Date `2020-09-18T00:00:00.000Z`", () => {
    expect(convert("18. 9. 2020")).toStrictEqual(
      new Date("2020-09-18T00:00:00.000Z"),
    );
  });
});

// UNDEFINED
describe("Date conversions from undefined", () => {
  it("should convert undefined to null", () => {
    expect(convert(undefined)).toBeNull();
  });
});
