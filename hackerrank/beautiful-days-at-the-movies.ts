/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function reverseNumber(x: number) {
  const reversedStr = [...x.toString()].reverse().join("");
  return Number(reversedStr);
}

function isBeautifulBy(divisor: number) {
  return function (day: number) {
    const reverse = reverseNumber(day);
    const difference = Math.abs(day - reverse);
    return Number.isInteger(difference / divisor);
  };
}
function beautifulDays(i: number, j: number, k: number): number {
  // Write your code here
  let total = 0;
  const isBeautiful = isBeautifulBy(k);
  for (let num = i; num <= j; num++) {
    if (isBeautiful(num)) total++;
  }
  return total;
}

console.log(beautifulDays(20, 23, 6));
