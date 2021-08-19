class PriorityQueue {
    constructor(compareFunction) {
        this.compareFunction = compareFunction || function (a, b) {
            return b - a;
        };
        this.queue = [];
    }
    enqueue(element) {
        if (this.queue.length === 0) {
            return this.queue.push(element);
        }
        if (this.queue.some((current, i) => {
            if (this.compareFunction(current, element) < 0) {
                this.queue.splice(i, 0, element);
                return true;
            }
        })) return;
        this.queue.push(element);
    }
    enqueueAll(elements) {
        elements.forEach(element => {
            this.enqueue(element)
        });
    }
    dequeue() {
        return this.queue.shift();
    }
    size() {
        return this.queue.length;
    }

}

module.exports = PriorityQueue;
// const priorityQueue = new PriorityQueue((a, b) => {
//     return a[1] - b[1];
// })

/**
 * ["first",2]
 * ["second",1]
 * ["Third",4]
 * ["fourth",3]
 */
// priorityQueue.enqueue(["first", 2]);
// priorityQueue.enqueue(["second", 1]);
// priorityQueue.enqueue(["Third", 4]);
// priorityQueue.enqueue(["fourth", 3]);
// console.log(priorityQueue)