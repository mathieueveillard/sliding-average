# sliding-average

Compute the sliding overage of numbers provided as an array, given a window:

```typescript
test("Array of 5 numbers, window of 3", function () {
  expect(slidingAverage([0, 1, 2, 3, 4], 3)).toEqual([0, 0.5, 1, 2, 3]);
});
```
