/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

function squares(first: number, last: number): number {
  let count = 0;
  let first_sqrt = 0;
  for (let i = first; i <= last; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      first_sqrt = Math.sqrt(i);
      break;
    }
  }
  if (first_sqrt === 0) return 0;
  while (first_sqrt * first_sqrt <= last) {
    count++;
    first_sqrt += 1;
  }

  return count;
}

console.log(squares(24, 49));
