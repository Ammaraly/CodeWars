/**
 * Decodes the messages from a particular encoder.
 */
device.decode = function(w) {
    var key = {};
    [...Array(256).keys()].map((i) => { key[device.encode(String.fromCharCode(i))] = String.fromCharCode(i) });
    result = []
    w = w.split('')
    for (let j = 0; j <= w.length; j++) {
        w = w.map((i) => key[i]);
        result.push(w.shift());
        j = 0;
    }
    return result.join('');
}