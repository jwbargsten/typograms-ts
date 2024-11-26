import {  test, expect } from "vitest";
import { dropWhile } from "./util";

test('should not drop', () => {
  const a = ["a", "b", "c"];

  const b= dropWhile(a, (v) => !v)
  expect(a).toEqual(b)
})


test('should drop', () => {
  const a = ["", "b", "c"];

  const b= dropWhile(a, (v) => !v)
  expect(b).toEqual([ "b", "c"])
})

