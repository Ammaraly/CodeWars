/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

class PlayerScore {
  score = 0;
  index = 0;

  constructor(_score = 0, _index = 0) {
    this.score = _score;
    this.index = _index;
  }
}

function comparatorNumber(a: number, b: number) {
  return b - a;
}

function comparator(a: PlayerScore, b: PlayerScore) {
  return b.score - a.score;
}

function getRank(score: bigint, rankedScores: bigint[]): number {
  if (score >= rankedScores[0]) return 1;
  if (score === rankedScores[rankedScores.length - 1])
    return rankedScores.length;
  if (score < rankedScores[rankedScores.length - 1])
    return rankedScores.length + 1;

  const arr1 = rankedScores.slice(0, Math.ceil(rankedScores.length / 2));
  const arr2 = rankedScores.slice(Math.ceil(rankedScores.length / 2));

  if (score === arr1[arr1.length - 1]) return arr1.length;
  if (score > arr1[arr1.length - 1]) return getRank(score, arr1);
  return getRank(score, arr2) + arr1.length;
}

function climbingLeaderboard(ranked: number[], player: number[]): number[] {
  // Write your code here
  const rankSet = new Set(ranked);
  const rankSortedArray = new Array(...rankSet).sort(comparatorNumber);
  const sortedPlayerScores = player
    .map((score, index) => new PlayerScore(score, index))
    .sort(comparator);
  let playerScoreCursor = 0;
  const playerRanks: number[] = [];

  rankSortedArray.forEach((score, index) => {
    if (sortedPlayerScores[playerScoreCursor].score >= score) {
      playerRanks[sortedPlayerScores[playerScoreCursor].index] = index + 1;
      playerScoreCursor++;
    }
  });

  while (playerScoreCursor < sortedPlayerScores.length) {
    playerRanks[sortedPlayerScores[playerScoreCursor].index] =
      rankSortedArray.length + 1;
    playerScoreCursor++;
  }
  return playerRanks;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]),
);
