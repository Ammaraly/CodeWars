/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(
  s: string,
  t: string,
  available_moves: number,
): string {
  if (available_moves > s.length + t.length) return "Yes";

  let idx = s.length;
  s.split("").find((ch, i) => {
    if (ch !== t[i]) {
      idx = i;
      return true;
    }
  });
  const required_moves = s.length - idx + (t.length - idx);
  if (required_moves > available_moves) return "No";
  if (required_moves === available_moves) return "Yes";
  // required_moves < k
  if (idx === 0) return "Yes";
  if ((available_moves - required_moves) % 2) return "No";

  return "Yes";
}

console.log(appendAndDelete("aba", "aba", 7));
