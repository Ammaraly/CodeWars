/*
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function comparator(a: number, b: number) {
  return a - b;
}

function cutTheSticks(arr: number[]): number[] {
  // Write your code here
  let sorted = [...arr].sort(comparator);
  const sticks_per_round = [];
  while (sorted.length) {
    sticks_per_round.push(sorted.length);
    sorted = sorted.map((val) => val - sorted[0]).filter((val) => val !== 0);
  }

  return sticks_per_round;
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));
