function getSums(deviceA, devicesB) {
  return devicesB.map((b) => deviceA + b);
}

function comparator(a, b) {
  return Number(a) - Number(b);
}

/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, budget) {
  const sums = keyboards
    .flatMap((k) => getSums(k, drives))
    .filter((s) => s <= budget)
    .sort(comparator);
  if (!sums.length) return -1;
  return sums.at(-1);
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60));
