/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(
  num_seats: number, // 8
  num_candies: number, // 9
  starting_seat: number, // 1
): number {
  // 1
  const start = starting_seat - 1; // 0
  const candies = num_candies - 1 + start; // 8
  const leftover_candies = candies % num_seats; // 0;
  const last_seat = leftover_candies + 1;

  return last_seat;
}

console.log(saveThePrisoner(210041918, 328800789, 159203369)); // 67920321
