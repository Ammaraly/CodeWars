/**
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 * @param string pin
 */
function validatePIN (pin) {
    return RegExp(/^[\d]{4}([\d]{2})?$/g).test(pin);
}

console.log(validatePIN("0001x01"));