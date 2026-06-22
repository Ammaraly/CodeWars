/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function equalizeArray(arr: number[]): number {
  const NumbersCount: Record<number, number> = {};
  arr.forEach((val) => (NumbersCount[val] = (NumbersCount[val] ?? 0) + 1));
  let max = 0;
  let sum = 0;
  Object.values(NumbersCount).forEach((val) => {
    if (val > max) max = val;
    sum += val;
  });
  return sum - max;
}
