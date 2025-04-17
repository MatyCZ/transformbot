import * as t from "./index";

const a1 = t.transform(
  t.pipe(t.string(), t.toUpperCase(), t.toAlphanumeric(), t.toNull()),
  "abcdefgh12356789--a",
);

const a2 = t.transform(
  t.pipe(t.string(), t.toUpperCase(), t.toAlphanumeric(), t.toEmpty()),
  "abcdefgh12356789--a",
);

const a3 = t.transform(t.pipe(t.boolean()), "abcdefgh12356789--a");

const a4 = t.transform(t.string(), "abcdefgh12356789--a");

const a5 = t.transform(
  t.pipe(
    t.string(),
    t.custom((val) => val.length > 1),
  ),
  "xxx",
);
