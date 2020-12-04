const { reverseString } = require("./reverse");

test("reverses string of 2 characters", () => {
  expect(reverseString("az")).toBe("za");
});

test("reverses string of 3 characters", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("reverses string with spaces", () => {
  expect(reverseString(" a  z ")).toBe(" z  a ");
});

test("reverses complex string", () => {
  expect(reverseString(" a  z 431a ")).toBe(" a134 z  a ");
});

test("reverses 'Mary had a little lamb.'", () => {
  expect(reverseString("Mary had a little lamb.")).toBe(
    ".bmal elttil a dah yraM"
  );
});
