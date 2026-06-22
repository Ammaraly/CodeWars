/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

/**
 * [(0, 1)][(2, 3)][(4, 0)] - 4 -> 3
 * [(0, 1)][(2, 3)][(4, 5)] - 5 -> 3
 * [(0, 1)][(2, 3)][(4, 5)][(6,0)] - 6 -> 4
 * [(0, 1)][(2, 3)][(4, 5)][(6,7)] - 7 -> 4
 * [(0, 1)][(2, 3)][(4, 5)][(6,7)][(8,0)] - 8 -> 5
 * [(0, 1)][(2, 3)][(4, 5)][(6,7)][(8,9)] - 9 -> 5
 * [(0, 1)][(2, 3)][(4, 5)][(6,7)][(8,9)][(10,0)] - 10 -> 6
 */

function pageCount(n: number, p: number): number {
  const paddingPages = !Boolean(n % 2) ? 2 : 1;
  const numberOfPages = (n + paddingPages) / 2;
  if (p === 1 || p === n) return 0;

  const pageOfP = Math.floor(p / 2) + 1;
  const turnsFromStart = pageOfP - 1;
  const turnsFromEnd = Math.abs(numberOfPages - pageOfP);
  const minimumTurn = Math.min(turnsFromStart, turnsFromEnd);
  return minimumTurn;
}

console.log(pageCount(6, 4));
