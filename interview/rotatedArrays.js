function transpose(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            [array[i][j], array[j][i]] = [array[j][i], array[i][j]];
        }
    }
    return array;
}

function rotateMatrix(array) {
    if (array.length !== array[0].length) return [];
    let transposed = transpose(array);
    transposed.map((arr) => arr.reverse())
}

const log = console.log;
let array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
]
rotateMatrix(array);
log(array);