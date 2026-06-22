/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

function circularArrayRotation(
  a: number[],
  k: number,
  queries: number[],
): number[] {
  // Write your code here
  const normalized_k = k % a.length;
  console.log(normalized_k);

  const new_a = a
    .slice(a.length - normalized_k)
    .concat(a.slice(0, a.length - normalized_k));

  return queries.map((i) => new_a[i]);
}

console.log(circularArrayRotation([3, 4, 5, 0], 3, [0, 1, 2, 3])); // 0,3,4,5 -> 5,0,3,4 -> 4,5,0,3
