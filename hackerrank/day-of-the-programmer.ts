/*
/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function isLeapYear(year: number): boolean {
  const isJulian = year < 1918;
  if (isJulian) return !Boolean(year % 4);

  return !Boolean(year % 400) || (Boolean(year % 100) && !Boolean(year % 4));
}

function dayOfProgrammer(year: number): string {
  // Write your code here
  if (year === 1918) {
    return `26.09.${year}`;
  }
  const isLeap = isLeapYear(year);
  if (isLeap) {
    return `12.09.${year}`;
  }

  return `13.09.${year}`;
}
