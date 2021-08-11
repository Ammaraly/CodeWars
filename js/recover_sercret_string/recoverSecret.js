var recoverSecret = function (triplets) {
    for (let [first] of triplets) {
        if (triplets.every((tuple) => tuple.indexOf(first) <= 0)) {
            triplets.filter(([item]) => item === first).forEach(triplet => triplet.shift());
            return first + recoverSecret(triplets.filter(triplet => triplet.length > 0))
        }
    }
    return '';
}

secret1 = "whatisup"
triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]

console.log(recoverSecret(triplets1));