var recoverSecret = function (triplets) {
    let secret = {};
    let index = 1;
    let finalSecret = [];
    let added = 0;
    triplets.forEach(triplet => {
        triplet.forEach(character => {
            if (!secret[character])
                secret[character] = index++;
        })
    });
    while (JSON.stringify(secret) != "{}") {
        let first = getFirst(secret, triplets);
        secret = filterSecret(first, secret);
        triplets = filterTriplets(first, triplets);
        finalSecret.push(first);
        added += 1;
    }
    return finalSecret.join('');
}

function filterTriplets(character, triplets) {
    triplets = triplets.map((triplet) => triplet.filter((char) => char !== character)).filter(triplet => triplet !== []);
    return triplets;
}

function filterSecret(character, secret) {
    delete secret[character];
    return secret;
}

function getFirst(secret, triplets) {
    return Object.getOwnPropertyNames(secret)
        .filter((character) => {
            let check = true;
            triplets.some(triplet => {
                if (triplet.length === 1) return false;
                if (triplet[1] == character || (triplet.length > 2 && triplet[2] == character)) {
                    check = false;
                    return true;
                }
            })
            return check;
        })[0];
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