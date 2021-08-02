/**
 * The lowest index N where the side to the left of N is equal to the side to the right of N.
 * If you do not find an index that fits these rules, then you will return -1.
 */
function findEvenIndex(arr)
{
  const sum = arr.reduce((a,b) => {return a + b},0);
  const sumsExceptCurrent = arr.map((item) => {return sum - item});
  var sumSoFar = 0;
  for (let i = 0; i < arr.length; i++) {
      i != 0 && (sumSoFar += arr[i-1]);
      if ( sumsExceptCurrent[i] == 0  || sumsExceptCurrent[i] / sumSoFar == 2) {
          return i;
      }
  }
  return -1;
}

console.log(findEvenIndex([1,2,3,4,5,6]));