/*
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

const LIKES_ON_DAY_MEMO: Record<number, number> = {
  1: 2,
};

const memo_proxy = new Proxy(LIKES_ON_DAY_MEMO, {
  get(target, prop, receiver) {
    if (target[Number(prop)]) console.log("get from memo:", prop);
    return target[Number(prop)];
  },
});

function getLikes(people: number) {
  return Math.floor(people / 2);
}

function getShares(people: number) {
  return people * 3;
}

function getLikesOnDay(day: number): number {
  if (LIKES_ON_DAY_MEMO[day] !== undefined) return LIKES_ON_DAY_MEMO[day];
  LIKES_ON_DAY_MEMO[day] = getLikes(getShares(getLikesOnDay(day - 1)));
  return LIKES_ON_DAY_MEMO[day];
}

function viralAdvertising(n: number): number {
  // Write your code here
  if (n === 1) return 2;
  if (n === 2) return 5;

  return getLikesOnDay(n) + viralAdvertising(n - 1);
}

console.log(viralAdvertising(5));
