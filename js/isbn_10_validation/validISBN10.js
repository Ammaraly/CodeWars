/**
 * ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9
 * The last digit can be 0-9 or X, to indicate a value of 10.
 * An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.
 */
function validISBN10(isbn) {
    return RegExp(/^[\d]{9}[\d|X]$/g).test(isbn) && (isbn.split('').map((n, i) => { return n != 'X' ? parseInt(n) * (i + 1) : 100; }).reduce((a, b) => { return a + b; }, 0) % 11) == 0
}

console.log(validISBN10("1112223339"));