/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k: number, height: number[]): number {
  // Write your code here
  const max = height.reduce((prev, curr) => {
    if (prev > curr) return prev;
    return curr;
  }, 0);

  return max > k ? max - k : 0;
}
