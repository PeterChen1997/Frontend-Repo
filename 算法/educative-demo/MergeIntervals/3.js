/**
 * Employee Free Time (hard) #
For ‘K’ employees, we are given a list of intervals representing the working hours of each employee. Our goal is to find out if there is a free interval that is common to all employees. You can assume that each list of employee working hours is sorted on the start time.

Example 1:

Input: Employee Working Hours=[[[1,3], [5,6]], [[2,3], [6,8]]]
Output: [3,5]
Explanation: Both the employess are free between [3,5].
Example 2:

Input: Employee Working Hours=[[[1,3], [9,12]], [[2,4]], [[6,8]]]
Output: [4,6], [8,9]
Explanation: All employess are free between [4,6] and [8,9].
Example 3:

Input: Employee Working Hours=[[[1,3]], [[2,4]], [[3,5], [7,9]]]
Output: [5,7]
Explanation: All employess are free between [5,7].
 */

const Heap = require("../../collections/heap");

class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    get_interval() {
        return "[" + this.start + ", " + this.end + "]";
    }
    print_interval() {
        process.stdout.write(`[${this.start}, ${this.end}]`);
    }
};

class EmployeeInterval {
    constructor(interval, employeeIndex, intervalIndex) {
        this.interval = interval; // interval representing employee's working hours
        // index of the list containing working hours of this employee
        this.employeeIndex = employeeIndex;
        this.intervalIndex = intervalIndex; // index of the interval in the employee list
    }
}

const find_employee_free_time = function (schedule) {
    const result = [];

    // init minHeap
    const minHeap = new Heap([], null, (a, b) => b.interval.start - a.interval.start)
    for (let i = 0; i < schedule.length; i++) {
        minHeap.push(new EmployeeInterval(schedule[i][0], i, 0))
    }

    // loop and look for interval
    let previousInterval = minHeap.peek().interval
    while (minHeap.length > 0) {
        const minEmployeeInterval = minHeap.pop()

        // judge if overlap
        if (minEmployeeInterval.interval.start < previousInterval.end) {
            if (previousInterval.end < minEmployeeInterval.interval.end) {
                previousInterval = minEmployeeInterval.interval
            }
        } else {
            result.push(new Interval(previousInterval.end, minEmployeeInterval.interval.start))
            previousInterval = minEmployeeInterval.interval
        }

        // push this employee's another interval
        const employeeSchedule = schedule[minEmployeeInterval.employeeIndex]
        if (minEmployeeInterval.intervalIndex + 1 < employeeSchedule.length) {
            minHeap.push(new EmployeeInterval(employeeSchedule[minEmployeeInterval.intervalIndex + 1], minEmployeeInterval.employeeIndex, minEmployeeInterval.intervalIndex + 1))
        }
    }
    return result;
};

let input = [
    [new Interval(1, 3), new Interval(5, 6)],
    [new Interval(2, 3), new Interval(6, 8)],
  ];
  process.stdout.write('Free intervals: ', end = '');
  let result = find_employee_free_time(input);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  
  input = [
    [new Interval(1, 3), new Interval(9, 12)],
    [new Interval(2, 4)],
    [new Interval(6, 8)],
  ];
  process.stdout.write('Free intervals: ', end = '');
  result = find_employee_free_time(input);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }
  
  input = [
    [new Interval(1, 3)],
    [new Interval(2, 4)],
    [new Interval(3, 5), new Interval(7, 9)],
  ];
  process.stdout.write('Free intervals: ', end = '');
  result = find_employee_free_time(input);
  for (i = 0; i < result.length; i++) {
    result[i].print_interval();
  }