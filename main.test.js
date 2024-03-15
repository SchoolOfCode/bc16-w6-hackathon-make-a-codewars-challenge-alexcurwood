import { test, expect } from "vitest";
import { capitalReverse } from "/main.js";
test("The user's function correctly reverses strings with one matching word (match - given word contains exactly one capital letter)", function () {
  let testCase = "xelA";
  let expected = "Alex";
  let actual = capitalReverse(testCase);
  expect(actual).toBe(expected);
});
test("The user's function correctly reverses strings with more than one matching word (match - given word contains exactly one capital letter)", function () {
  let testCase = "xelA is from tneK";
  let expected = "Alex is from Kent";
  let actual = capitalReverse(testCase);
  expect(actual).toBe(expected);
});
test("The user's function correctly reverses strings with no matching words (match - given word contains exactly one capital letter)", function () {
  let testCase = "this should not be reversed";
  let expected = "this should not be reversed";
  let actual = capitalReverse(testCase);
  expect(actual).toBe(expected);
});
test("The user's function correctly reverses strings with a matching word with a capital letter at the start (match - given word contains exactly one capital letter)", function () {
  let testCase = "Siht should be reversed";
  let expected = "thiS should be reversed";
  let actual = capitalReverse(testCase);
  expect(actual).toBe(expected);
});
test("The user's function correctly reverses strings with a matching word with a capital letter at the end (match - given word contains exactly one capital letter)", function () {
  let testCase = "this should be desreveR";
  let expected = "this should be Reversed";
  let actual = capitalReverse(testCase);
  expect(actual).toBe(expected);
});
test("The user's function correctly reverses strings with a non-matching word containing two capital letters (match - given word contains exactly one capital letter)", function () {
  let testCase = "THis should not be reversed";
  let expected = "THis should not be reversed";
  let actual = capitalReverse(testCase);
  expect(actual).toBe(expected);
});
