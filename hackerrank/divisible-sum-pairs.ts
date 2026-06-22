/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  // Write your code here
  let pairs = 0;

  for (let i = 0; i < ar.length; i++) {
    const current = ar[i];
    for (let j = i + 1; j < ar.length; j++) {
      if ((current + ar[j]) % k) continue;
      pairs += 1;
    }
  }

  return pairs;
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6]));
