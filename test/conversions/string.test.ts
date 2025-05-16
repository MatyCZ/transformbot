import { describe, expect, it } from "vitest";
import { string } from "../../src/conversions/string.ts";

describe("String conversions", () => {
  const convert = string();

  it("should convert array `[]` to `null`", () => {
    expect(convert([])).toBeNull();
  });

  it("should convert bigint `100` to `null`", () => {
    expect(convert(BigInt(100))).toBeNull();
  });

  it("should convert boolean `true` to `null`", () => {
    expect(convert(true)).toBeNull();
  });

  it("should convert boolean `false` to `null`", () => {
    expect(convert(false)).toBeNull();
  });

  it("should convert Date `` to `null`", () => {
    expect(convert(new Date())).toBeNull();
  });

  it("should convert null to `null`", () => {
    expect(convert(null)).toBeNull();
  });

  it("should convert number `0` to `0`", () => {
    expect(convert(0)).toBe("0");
  });

  it("should convert number `1` to `1`", () => {
    expect(convert(1)).toBe("1");
  });

  it("should convert number `123` to `123`", () => {
    expect(convert(123)).toBe("123");
  });

  it("should convert object `{}` to `null`", () => {
    expect(convert({})).toBeNull();
  });

  it("should convert string `` to ``", () => {
    expect(convert("")).toBe("");
  });

  it("should convert string `0` to `0`", () => {
    expect(convert("0")).toBe("0");
  });

  it("should convert string `1` to `1`", () => {
    expect(convert("1")).toBe("1");
  });

  it("should convert string `1,23` to `1,23`", () => {
    expect(convert("1,23")).toBe("1,23");
  });

  it("should convert string `456` to `456`", () => {
    expect(convert("456")).toBe("456");
  });

  it("should convert string ` 789 ` to ` 789 `", () => {
    expect(convert(" 789 ")).toBe(" 789 ");
  });

  it("should convert string `abc` to `abc`", () => {
    expect(convert("abc")).toBe("abc");
  });

  it("should convert string `false` to `false`", () => {
    expect(convert("false")).toBe("false");
  });

  it("should convert string `no` to `no`", () => {
    expect(convert("no")).toBe("no");
  });

  it("should convert string `true` to `true`", () => {
    expect(convert("true")).toBe("true");
  });

  it("should convert string `yes` to `yes`", () => {
    expect(convert("yes")).toBe("yes");
  });

  it("should convert undefined to `null`", () => {
    expect(convert(undefined)).toBeNull();
  });
});
