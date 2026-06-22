/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

const MEMO: Record<number, number> = {};

function utopianTree(n: number): number {
  // Write your code here
  if (n === 0) return 1;

  return n % 2 ? 2 * utopianTree(n - 1) : 1 + utopianTree(n - 1);
}

console.log(utopianTree(3));
