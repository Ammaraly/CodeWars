/*
 * Complete the 'libraryFine' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER d1
 *  2. INTEGER m1
 *  3. INTEGER y1
 *  4. INTEGER d2
 *  5. INTEGER m2
 *  6. INTEGER y2
 */

function libraryFine(
  d1: number,
  m1: number,
  y1: number,
  d2: number,
  m2: number,
  y2: number,
): number {
  if (y1 > y2) {
    return 10000;
  }

  if (y1 !== y2) {
    return 0;
  }

  if (m1 > m2) {
    return (m1 - m2) * 500;
  }

  if (m1 !== m2) {
    return 0;
  }

  if (d1 > d2) {
    return (d1 - d2) * 15;
  }

  return 0;
}
