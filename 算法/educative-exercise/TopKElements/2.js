/**
 * You are given a list of tasks that need to be run, in any order, on a server. Each task will take one CPU interval to execute but once a task has finished, it has a cooling period during which it can’t be run again. If the cooling period for all tasks is ‘K’ intervals, find the minimum number of CPU intervals that the server needs to finish all tasks.

If at any time the server can’t execute any task then it must stay idle.
 */
const Heap = require("../../collections/heap");

const schedule_tasks = function (tasks, k) {
    let intervalCount = 0;

    // init char map
    const tasksMap = {}
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]
        if (!(task in tasksMap)) {
            tasksMap[task] = 0
        }
        tasksMap[task] += 1
    }

    // init maxHeap
    const maxHeap = new Heap([], null, ((a, b) => a[0] - b[0]))
    Reflect.ownKeys(tasksMap).forEach(task => {
        maxHeap.push([tasksMap[task], task])
    })

    // for loop
    while (maxHeap.length > 0) {
        const waitList = []
        let cpuWorkCount = k + 1

        // check cpu tasks
        while (cpuWorkCount > 0 && maxHeap.length > 0) {
            intervalCount++

            const [frequency, task] = maxHeap.pop()
            if (frequency > 1) {
                waitList.push([frequency - 1, task])
            }

            cpuWorkCount--
        }

        // put wait list back
        waitList.forEach(task => maxHeap.push(task))

        // add idle count if need
        if (maxHeap.length > 0) {
            intervalCount += cpuWorkCount
        }
    }
    return intervalCount;
};


console.log(`Minimum intervals needed to execute all tasks: ${
    schedule_tasks(['a', 'a', 'a', 'b', 'c', 'c'], 2)}`);
console.log(`Minimum intervals needed to execute all tasks: ${
    schedule_tasks(['a', 'b', 'a'], 3)}`);