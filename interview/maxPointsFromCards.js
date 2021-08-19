const log = console.log;

function maxPoints(arr, k) {
    let left = [0], right = [0], max = -Infinity;
    arr.some((element, i) => {
        if (i >= k)
            return true;
        left.push(element + left[left.length - 1])
        right.unshift(arr[arr.length - i - 1] + right[0])
    });
    left.forEach((el, i) => {
        if (max < el + right[i]) max = el + right[i];
    })
    log(left, right)
    return max
}

log(maxPoints([1, 2, 3, 4, 5, 6, 1], 1));