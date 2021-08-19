const PriorityQueue = require('./priorityQueue')

const log = console.log;

function reorganize(str) {
    let lower = str;
    let map = {};
    let result = "";
    lower.split('').forEach(element => {
        if (map[element]) map[element]++;
        else map[element] = 1;
    });
    let priorityQueue = new PriorityQueue((a, b) => map[a] - map[b]);
    priorityQueue.enqueueAll(Object.keys(map));
    log(priorityQueue)
    while (priorityQueue.size() > 1) {
        let current = priorityQueue.dequeue();
        let next = priorityQueue.dequeue();
        result += current + next;
        map[current]--;
        map[next]--;
        if (map[current] > 0) priorityQueue.enqueue(current);
        if (map[next] > 0) priorityQueue.enqueue(next);
    }
    if (priorityQueue.size() === 1) {
        let last = priorityQueue.dequeue()
        if (map[last] > 1) return "";
        result += last;
    }
    return result;
}

log(reorganize("aaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccddddddd"));