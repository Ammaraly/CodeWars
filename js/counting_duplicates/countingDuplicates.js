/**
 * Counts distinct cas insensitive duplicates in given text.
 */
function duplicateCount(text){
    if (text.length == 0 ) return 0;
    var total = 0;
    var done = [];
    text.toLowerCase().split('').sort().reduce((previous, current) => { previous == current && !done.includes(current) && done.push(current) &&  total++; return current;});
    return total;
  }

  console.log(duplicateCount("aabBcade"));
