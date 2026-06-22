/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(divisor: number, arr: number[]) {
  let max_count = 0;
  let meta_index = 0;
  while (meta_index < arr.length) {
    let index = meta_index;
    let arr_remaining = arr;
    while (index < arr_remaining.length) {
      console.log(meta_index, index);
      let num = arr[index];
      arr_remaining = arr_remaining.filter((val, i) => {
        if (i === index) return true; // skip num
        const sum = val + num;
        console.log({
          num,
          val,
          sum,
          remove: !Boolean(sum % divisor),
        });
        return sum % divisor;
      });
      index += 1;
      console.log(arr_remaining);
    }
    meta_index++;
    if (arr_remaining.length > max_count) max_count = arr_remaining.length;
  }

  return max_count;
}

// console.log(nonDivisibleSubset(4, [19, 10, 12, 10, 24, 25, 22]));
// console.log(
//   nonDivisibleSubset(
//     7,
//     [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436],
//   ),
// );

console.log(nonDivisibleSubset(4, [1, 7, 2, 4]));
