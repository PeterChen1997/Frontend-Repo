/**
 * Given a string and a number ‘K’, find if the string can be rearranged such that the same characters are at least ‘K’ distance apart from each other.
 */
const Heap = require("../../collections/heap");

const reorganize_string = function (str, k) {
    if (!str || k <= 1) {
        return str
    }

    // count char nums
    const charCounterObj = {}
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (!(char in charCounterObj)) {
            charCounterObj[char] = 0
        }
        charCounterObj[char] += 1
    }

    // init N chars maxHeap
    const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]))
    Reflect.ownKeys(charCounterObj).forEach(char => {
        maxHeap.push([charCounterObj[char], char])
    })

    // for loop for str
    let resultStr = ""
    let waitQueue = []
    while (maxHeap.length > 0) {
        let [frequency, char] = maxHeap.pop()
        resultStr += char

        waitQueue.push([frequency - 1, char])
        if (waitQueue.length === k) {
            [frequency, char] = waitQueue.shift()
            if (frequency > 0) {
                maxHeap.push([frequency, char])
            }
        }
    }

    if (resultStr.length === str.length) {
        return resultStr
    }

    return "";
};

console.log(`Reorganized string: ${reorganize_string("Programming", 3)}`)
console.log(`Reorganized string: ${reorganize_string("mmpp", 2)}`)
console.log(`Reorganized string: ${reorganize_string("aab", 2)}`)
console.log(`Reorganized string: ${reorganize_string("aapa", 3)}`)
