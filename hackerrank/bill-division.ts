/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill: number[], k: number, b: number): void {
  // Write your code here
  let fairAmount = 0;

  bill.forEach((item, index) => {
    if (index === k) return;
    fairAmount += item;
  });
  fairAmount /= 2;

  if (fairAmount === b) {
    console.log("Bon Appetit");
    return;
  }

  console.log(b - fairAmount);
}
