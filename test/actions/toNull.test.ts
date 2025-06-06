import { describe, expect, it } from "vitest";
import { toNull } from "../../src/actions/toNull.ts";

describe("toNull conversions", () => {
  // Test without options
  describe("default behavior", () => {
    const convert = toNull();

    it("should convert array `[]` to `null`", () => {
      expect(convert([])).toBeNull();
    });

    it("should keep non-empty array", () => {
      const arr = [1, 2, 3];
      expect(convert(arr)).toBe(arr);
    });

    it("should keep bigint `100`", () => {
      const val = BigInt(100);
      expect(convert(val)).toBe(val);
    });

    it("should keep boolean `true`", () => {
      expect(convert(true)).toBe(true);
    });

    it("should keep boolean `false`", () => {
      expect(convert(false)).toBe(false);
    });

    it("should convert Date with time 0 to `null`", () => {
      const zeroDate = new Date(0);
      expect(convert(zeroDate)).toBeNull();
    });

    it("should keep regular Date", () => {
      const date = new Date();
      expect(convert(date)).toBe(date);
    });

    it("should keep null as `null`", () => {
      expect(convert(null)).toBeNull();
    });

    it("should convert number `0` to `null`", () => {
      expect(convert(0)).toBeNull();
    });

    it("should keep number `1`", () => {
      expect(convert(1)).toBe(1);
    });

    it("should keep number `123`", () => {
      expect(convert(123)).toBe(123);
    });

    it("should keep object `{}`", () => {
      const obj = {};
      expect(convert(obj)).toBe(obj);
    });

    it("should convert empty string `` to `null`", () => {
      expect(convert("")).toBeNull();
    });

    it("should keep string `0`", () => {
      expect(convert("0")).toBe("0");
    });

    it("should keep string `1`", () => {
      expect(convert("1")).toBe("1");
    });

    it("should keep string `1,23`", () => {
      expect(convert("1,23")).toBe("1,23");
    });

    it("should keep string `456`", () => {
      expect(convert("456")).toBe("456");
    });

    it("should keep string ` 789 `", () => {
      expect(convert(" 789 ")).toBe(" 789 ");
    });

    it("should keep string `abc`", () => {
      expect(convert("abc")).toBe("abc");
    });

    it("should keep string `false`", () => {
      expect(convert("false")).toBe("false");
    });

    it("should keep string `no`", () => {
      expect(convert("no")).toBe("no");
    });

    it("should keep string `true`", () => {
      expect(convert("true")).toBe("true");
    });

    it("should keep string `yes`", () => {
      expect(convert("yes")).toBe("yes");
    });

    it("should keep undefined as undefined", () => {
      expect(convert(undefined)).toBe(undefined);
    });
  });

  // Test with options
  describe("with options", () => {
    it("should keep empty array when skipArray is true", () => {
      const convert = toNull({ skipArray: true });
      const arr: string[] = [];
      expect(convert(arr)).toBe(arr);
    });

    it("should keep Date with time 0 when skipDate is true", () => {
      const convert = toNull({ skipDate: true });
      const zeroDate = new Date(0);
      expect(convert(zeroDate)).toBe(zeroDate);
    });

    it("should keep number `0` when skipNumber is true", () => {
      const convert = toNull({ skipNumber: true });
      expect(convert(0)).toBe(0);
    });

    it("should keep empty string when skipString is true", () => {
      const convert = toNull({ skipString: true });
      expect(convert("")).toBe("");
    });

    it("should keep all normally-converted values when all skip options are true", () => {
      const convert = toNull({
        skipArray: true,
        skipDate: true,
        skipNumber: true,
        skipString: true,
      });

      expect(convert([])).toEqual([]);
      expect(convert(new Date(0))).toEqual(new Date(0));
      expect(convert(0)).toBe(0);
      expect(convert("")).toBe("");
      expect(convert(null)).toBeNull();
    });
  });
});
