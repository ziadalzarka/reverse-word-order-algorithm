const { reverseWordOrder } = require("./reverse");

test("reverses odd number of words", () => {
  expect(reverseWordOrder("Mary had a little lamb")).toBe(
    "lamb little a had Mary"
  );
});

test("reverses even number of words", () => {
  expect(reverseWordOrder("Mary had a little")).toBe("little a had Mary");
});

test("reverses words without truncating spaces", () => {
  expect(reverseWordOrder("Mary  had   a  little")).toBe(
    "little  a   had  Mary"
  );
});
