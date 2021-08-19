function tickets(peopleInLine) {
    let change = { 25: 0, 50: 0 };
    let message = "YES";
    peopleInLine.some((cash) => {
        log(change)
        let amount = cash - 25;
        while (amount) {
            log(amount)
            if (amount >= 50 && change[50]) {
                amount -= 50;
                change[50]--
            } else {
                amount -= 25;
                change[25]--
            }
        }
        if (change[25] < 0 || change[50] < 0) {
            message = "NO";
            return true
        }
        change[cash]++;
    })
    return message;
}

const log = console.log;

log(tickets([25, 100]))