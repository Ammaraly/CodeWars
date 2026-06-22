/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
  // Write your code here
  const sightCount: Record<string, number> = {};
  arr.forEach((value) => {
    sightCount[value.toString()] = (sightCount?.[value.toString()] ?? 0) + 1;
  });
  let maxPair: [string, number] = ["0", 0];
  Object.keys(sightCount).forEach((key) => {
    if (sightCount[key] === maxPair[1]) {
      if (Number(key) < Number(maxPair[0])) {
        maxPair = [key, sightCount[key]];
      }
    } else if (sightCount[key] > maxPair[1]) {
      maxPair = [key, sightCount[key]];
    }
  });

  return Number(maxPair[0]);
}
