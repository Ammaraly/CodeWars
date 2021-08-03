/**
 * Convert from RGB to  hexadecimal representation.
 * Valid decimal values for RGB are 0 - 255.
 * Any values that fall out of that range must be rounded to the closest valid value.
 * Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
 */
function rgb(r, g, b) {
    return [r, g, b].map((arg) => {
        arg = arg < 0 ? 0 : arg > 255 ? 255 : arg;
        return arg.toString(16).length < 2 ? "0" + arg.toString(16) : arg.toString(16)
    }).join("").toUpperCase();
}

console.log(rgb(0, 100, 100));