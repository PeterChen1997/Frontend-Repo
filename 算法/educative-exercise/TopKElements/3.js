/**
 * Design a class that simulates a Stack data structure, implementing the following two operations:

push(int num): Pushes the number ‘num’ on the stack.
pop(): Returns the most frequent number in the stack. If there is a tie, return the number which was pushed later.
 */

const Heap = require("../../collections/heap");

class Task {
    constructor(num, frequency, sequence) {
        this.num = num
        this.frequency = frequency
        this.sequence = sequence
    }

    compare(b) {
        // high frequency wins
        if (this.frequency !== b.frequency) {
            return this.frequency - b.frequency;
        }

        // big sequence wins
        return this.sequence - b.sequence;

    }
}

class FrequencyStack {
    constructor() {
        this.sequenceNum = 0
        this.frequencyMap = {}
        this.maxHeap = new Heap([], null, (a, b) => a.compare(b))
    }

    push(num) {
        if (!(num in this.frequencyMap)) {
            this.frequencyMap[num] = 0
        }
        this.frequencyMap[num] += 1
        this.sequenceNum += 1

        this.maxHeap.push(new Task(num, this.frequencyMap[num], this.sequenceNum))
    }

    pop() {
        const num = this.maxHeap.pop().num
        if (this.frequencyMap[num] > 1) {
            this.frequencyMap[num] -= 1;
        } else {
            delete this.frequencyMap[num];
        }

        return num;
    }
};


var frequencyStack = new FrequencyStack()
frequencyStack.push(1)
frequencyStack.push(2)
frequencyStack.push(3)
frequencyStack.push(2)
frequencyStack.push(1)
frequencyStack.push(2)
frequencyStack.push(5)
console.log(frequencyStack.pop())
console.log(frequencyStack.pop())
console.log(frequencyStack.pop())