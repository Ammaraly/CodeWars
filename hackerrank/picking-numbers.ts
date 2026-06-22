/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function comparator(a: number, b: number) {
  return a - b;
}

function pickingNumbers(a: number[]): number {
  // Write your code here
  const sorted = [...a].sort(comparator);
  const sums = [0];
  let max = 0;

  sorted.forEach((val, i, arr) => {
    if (i === 0) return;

    if (val === arr[i - 1]) {
      if (i === 1) sums[sums.length - 1] = sums[sums.length - 1] + 2;
      else sums[sums.length - 1] = sums[sums.length - 1] + 1;
    } else if (val === arr[i - 1] + 1) {
      sums.push(1);
    } else {
      sums.push(0);
      sums.push(1);
    }
  });

  if (sums.length === 1) return sums[0];

  sums.forEach((val, i, arr) => {
    if (i === arr.length - 1) return;

    if (val + arr[i + 1] > max) max = val + arr[i + 1];
  });

  return max;
}

console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
