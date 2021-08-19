function dominoRotations(a, b) {
    let minSwaps = Math.min(
        numSwaps(a[0], a, b),
        numSwaps(b[0], a, b),
    );
    minSwaps = Math.min(minSwaps, numSwaps(a[0], b, a));
    minSwaps = Math.min(minSwaps, numSwaps(b[0], b, a));
    return minSwaps === Infinity ? -1 : minSwaps;
}

function numSwaps(target, a, b) {
    let numSwaps = 0;
    a.some((el, i) => {
        if (el !== target && b[i] !== target) {
            numSwaps = Infinity
            return true
        }
        if (el !== target) numSwaps++;
    })
    return numSwaps;
}

const log = console.log;

const a = [2, 1, 2, 4, 2, 2];
const b = [5, 2, 6, 2, 3, 2];

log(dominoRotations(a, b));