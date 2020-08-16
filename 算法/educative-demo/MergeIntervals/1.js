/**
 * Minimum Meeting Rooms (hard) #
Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

Example 1:

Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can 
occur in any of the two rooms later.
Example 2:

Meetings: [[6,7], [2,4], [8,12]]
Output: 1
Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.
Example 3:

Meetings: [[1,4], [2,3], [3,6]]
Output:2
Explanation: Since [1,4] overlaps with the other two meetings [2,3] and [3,6], we need two rooms to 
hold all the meetings.
 
Example 4:

Meetings: [[4,5], [2,3], [2,4], [3,5]]
Output: 2
Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
 
Here is a visual representation of Example 4:
 */

const Heap = require('../../collections/heap')

class Meeting {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
};

const min_meeting_rooms = function (meetings) {
    // sort meetings
    meetings = meetings.sort((a, b) => a.start - b.start)

    // build heap to store the end time of the meeting
    const minHeap = new Heap([], null, (a, b) => b.end - a.end)
    let minRooms = 0

    for (let i = 0; i < meetings.length; i++) {
        const curMeeting = meetings[i]

        // remove ended meeting
        while (minHeap.length > 0 && curMeeting.start >= minHeap.peek().end) {
            minHeap.pop()
        }

        // add curMeeting to the heap
        minHeap.push(curMeeting)

        // check the minRooms
        minRooms = Math.max(minRooms, minHeap.length)
    }
    return minRooms
};

console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`)
console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)