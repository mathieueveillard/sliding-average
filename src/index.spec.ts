import { slidingAverage } from ".";

test("Array of 0 numbers", function () {
  expect(slidingAverage([])).toEqual([]);
});

test("Array of 1 number: 1 average, that is the number itself", function () {
  expect(slidingAverage([0])).toEqual([0]);
});

test("Array of 2 numbers: 2 averages, computed on all previous numbers", function () {
  expect(slidingAverage([0, 1])).toEqual([0, 0.5]);
});

test("Array of 2 numbers but window of 1: 2 averages, that are the numbers themselves", function () {
  expect(slidingAverage([0, 1], 1)).toEqual([0, 1]);
});

test("[control] Array of 5 numbers, window of 3", function () {
  expect(slidingAverage([0, 1, 2, 3, 4], 3)).toEqual([0, 0.5, 1, 2, 3]);
});
