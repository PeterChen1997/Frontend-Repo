/**
 * 给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],...] (si < ei)，为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。

示例 1:

输入: [[0, 30],[5, 10],[15, 20]]
输出: 2
示例 2:

输入: [[7,10],[2,4]]
输出: 1

 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
// 整两个堆
// 小根堆 用来看那个任务最接近结束，同时存储开始时间
// 小根堆 看哪个任务即将执行

import Heap from "../../collections/heap.js";

var minMeetingRooms = function (intervals) {
    if (!intervals || !intervals.length) {
        return 0;
    }

    const minHeap = new Heap([], null, (a, b) => b[1] - a[1]);

    intervals.sort((a, b) => a[0] - b[0]);

    let counter = 1;
    minHeap.push(intervals[0]);

    for (let i = 1; i < intervals.length; i++) {
        let [start] = intervals[i];

        let nearestEndTime = minHeap.peek()[1];

        if (start <= nearestEndTime) {
            counter++;
        } else {
            minHeap.pop();
        }

        minHeap.push(intervals[i]);
    }

    return counter;
};

console.log(
    minMeetingRooms([
        [0, 30],
        [5, 10],
        [15, 20],
    ])
);
