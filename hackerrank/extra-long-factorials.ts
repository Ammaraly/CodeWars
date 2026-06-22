/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */
const _MEMO: Record<number, bigint> = {
  1: BigInt(1),
  2: BigInt(2),
  3: BigInt(6),
};

const MEMO = new Proxy(_MEMO, {
  get(target, p, receiver) {
    if (p in target) {
      console.log("got from memo: ", p, target[p as any]);
      return target[p as any];
    }
    return undefined;
  },
});

function factorial(n: bigint) {
  if (MEMO[Number(n)]) return MEMO[Number(n)];

  const fact: bigint = BigInt(n * factorial(n - BigInt(1)));
  MEMO[Number(n)] = fact;
  return fact;
}

function extraLongFactorials(n: number): void {
  // Write your code here
  const result = factorial(BigInt(n));
  console.log(result.toString());
  console.log(result.toString().length);
  const arr = result.toString().split("");
  console.log(arr.filter((c) => c === "0").length);
  console.log(arr.filter((c) => c === "1").length);
  console.log(arr.filter((c) => c === "2").length);
  console.log(arr.filter((c) => c === "3").length);
  console.log(arr.filter((c) => c === "4").length);
  console.log(arr.filter((c) => c === "5").length);
  console.log(arr.filter((c) => c === "6").length);
  console.log(arr.filter((c) => c === "7").length);
  console.log(arr.filter((c) => c === "8").length);
  console.log(arr.filter((c) => c === "9").length);
}

console.log(extraLongFactorials(6957));
