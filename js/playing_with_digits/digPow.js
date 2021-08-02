/**
 * we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
 * "is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k"
 * If it is the case we will return k, if not return -1.
 * Note: n and p will always be given as strictly positive integers.
 */
function digPow(n, p) {
    if (Number.isInteger(result = n.toString().split('').map((num) => { return parseInt(num) ** p++; }).reduce((a, b) => { return a + b }) / n)) return result;
    return -1;
}

console.log(digPow(46288, 3));