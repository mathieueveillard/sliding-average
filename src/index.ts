interface ProtoAverage {
  sum: number;
  count: number;
}

const initialAccumulator: ProtoAverage = {
  sum: 0,
  count: 0,
};

export function slidingAverage(array: number[], window?: number): number[] {
  return array
    .reduce<ProtoAverage[]>((acc, cur, index) => {
      const { sum, count } = acc[acc.length - 1] || initialAccumulator;
      if (window && index - window >= 0) {
        return [
          ...acc,
          {
            sum: sum + cur - array[index - window],
            count: count,
          },
        ];
      }
      return [
        ...acc,
        {
          sum: sum + cur,
          count: count + 1,
        },
      ];
    }, [])
    .map(({ sum, count }) => sum / count);
}
