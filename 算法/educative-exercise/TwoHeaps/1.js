/**
 * Given an array of intervals, find the next interval of each interval. In a list of intervals, for an interval ‘i’ its next interval ‘j’ will have the smallest ‘start’ greater than or equal to the ‘end’ of ‘i’.

Write a function to return an array containing indices of the next interval of each input interval. If there is no next interval of a given interval, return -1. It is given that none of the intervals have the same start point.
 */

const Heap = require("../../collections/heap");

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
};


const find_next_interval = function (intervals) {
    const result = new Array(intervals.length).fill(-1);

    // build two max heaps
    const maxEndHeap = new Heap([], null, ((a, b) => a[0] - b[0]))
    const maxStartHeap = new Heap([], null, ((a, b) => a[0] - b[0]))

    // init two heaps
    for (let i = 0; i < intervals.length; i++) {
        maxEndHeap.push([intervals[i].end, i])
        maxStartHeap.push([intervals[i].start, i])
    }

    // find the right index
    for (let i = 0; i < intervals.length; i++) {
        const [ endValue, endIndex ] = maxEndHeap.pop()
        if (maxStartHeap.peek()[0] >= endValue) {
            let [ startValue, startIndex ] = maxStartHeap.pop();
            while (maxStartHeap.peek()[0] >= endValue) {
                [ startValue, startIndex ] = maxStartHeap.pop();
            }
            result[endIndex] = startIndex
            // put value back
            maxStartHeap.push([startValue, startIndex])
        }
    }
    return result;
};


result = find_next_interval(
    [new Interval(2, 3), new Interval(3, 4), new Interval(5, 6)])
console.log(`Next interval indices are: ${result}`)


result = find_next_interval(
    [new Interval(3, 4), new Interval(1, 5), new Interval(4, 6)])
console.log(`Next interval indices are: ${result}`)
