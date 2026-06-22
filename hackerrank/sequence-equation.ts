/*
 * Complete the 'permutationEquation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY p as parameter.
 */

// find p[p[x]] for each 1 < x < n
function permutationEquation(p: number[]): number[] {
  const result: number[] = [];
  p.forEach((y) => {
    const p_of_y = p[y - 1]; // p[5] -> 4
    const p_of_p_of_y = p[p_of_y - 1]; // p[p[5]] -> 3
    result[p_of_p_of_y - 1] = y; // r[3] -> 5
  });

  return result;
}

console.log(permutationEquation([5, 2, 1, 3, 4]));
