/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n: number): number {
  const MEMO: Record<number, boolean> = {
    1: true,
  };

  let nonZeroDigits = 0;
  n.toString()
    .split("")
    .filter((c) => c !== "0")
    .forEach((digit) => {
      if (MEMO[Number(digit)] !== undefined) {
        if (MEMO[Number(digit)]) nonZeroDigits++;
        return;
      }

      MEMO[Number(digit)] = !Boolean(n % Number(digit));
      if (MEMO[Number(digit)]) nonZeroDigits++;
    });

  return nonZeroDigits;
}

/**
 * 11
 123456789
 114108089
 110110015
 121
 33
 44
 55
 66
 77
 88

 */

console.log(findDigits(106108048));
