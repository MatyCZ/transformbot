import { describe, expect, it } from "vitest";
import { boolean } from "../../src/conversions/boolean.ts";

describe("Boolean conversions", () => {
  const convert = boolean();

  it("should convert array `[]` to `null`", () => {
    expect(convert([])).toBeNull();
  });

  it("should convert bigint `100` to `null`", () => {
    expect(convert(BigInt(100))).toBeNull();
  });

  it("should convert boolean `true` to `true`", () => {
    expect(convert(true)).toBeTruthy();
  });

  it("should convert boolean `false` to `false`", () => {
    expect(convert(false)).toBeFalsy();
  });

  it("should convert Date `` to `null`", () => {
    expect(convert(new Date())).toBeNull();
  });

  it("should convert null to `null`", () => {
    expect(convert(null)).toBeNull();
  });

  it("should convert number `0` to `false`", () => {
    expect(convert(0)).toBeFalsy();
  });

  it("should convert number `1` to `true`", () => {
    expect(convert(1)).toBeTruthy();
  });

  it("should convert number `123` to `null`", () => {
    expect(convert(123)).toBeNull();
  });

  it("should convert object `{}` to `null`", () => {
    expect(convert({})).toBeNull();
  });

  it("should convert string `` to `null`", () => {
    expect(convert("")).toBeNull();
  });

  it("should convert string `0` to `false`", () => {
    expect(convert("0")).toBeFalsy();
  });

  it("should convert string `1` to `true`", () => {
    expect(convert("1")).toBeTruthy();
  });

  it("should convert string `1,23` to `null`", () => {
    expect(convert("1,23")).toBeNull();
  });

  it("should convert string `456` to `null`", () => {
    expect(convert("456")).toBeNull();
  });

  it("should convert string ` 789 ` to `null`", () => {
    expect(convert(" 789 ")).toBeNull();
  });

  it("should convert string `abc` to `null`", () => {
    expect(convert("abc")).toBeNull();
  });

  it("should convert string `false` to `false`", () => {
    expect(convert("false")).toBeFalsy();
  });

  it("should convert string `no` to `false`", () => {
    expect(convert("no")).toBeFalsy();
  });

  it("should convert string `true` to `true`", () => {
    expect(convert("true")).toBeTruthy();
  });

  it("should convert string `yes` to `true`", () => {
    expect(convert("yes")).toBeTruthy();
  });

  it("should convert undefined to `null`", () => {
    expect(convert(undefined)).toBeNull();
  });
});
