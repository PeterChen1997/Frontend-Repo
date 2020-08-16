/**
 * We are given an array containing positive and negative numbers. Suppose the array contains a number ‘M’ at a particular index. Now, if ‘M’ is positive we will move forward ‘M’ indices and if ‘M’ is negative move backwards ‘M’ indices. You should assume that the array is circular which means two things:

If, while moving forward, we reach the end of the array, we will jump to the first element to continue the movement.
If, while moving backward, we reach the beginning of the array, we will jump to the last element to continue the movement.
Write a method to determine if the array has a cycle. The cycle should have more than one element and should follow one direction which means the cycle should not contain both forward and backward movements.

Example 1:

Input: [1, 2, -1, 2, 2]
Output: true
Explanation: The array has a cycle among indices: 0 -> 1 -> 3 -> 0
Example 2:

Input: [2, 2, -1, 2]
Output: true
Explanation: The array has a cycle among indices: 1 -> 3 -> 1
Example 3:

Input: [2, 1, -1, -2]
Output: false
Explanation: The array does not have any cycle.
 */

function findNextIndex(arr, pointer, loopDirectionFlag) {
    let nextIndex = (pointer + arr[pointer]) % arr.length
    let nextValue = arr[nextIndex]
    if (nextValue >= 0 === loopDirectionFlag) {
        return nextIndex
    }
    return -1
}

const circular_array_loop_exists = function (arr) {
    // for each index to judge
    for (let i = 0; i < arr.length; i++) {
        let slowPointer = i
        let fastPointer = i
        let loopDirectionFlag = arr[i] >= 0
        while (true) {
            slowPointer = findNextIndex(arr, slowPointer, loopDirectionFlag)
            fastPointer = findNextIndex(arr, fastPointer, loopDirectionFlag)

            if (fastPointer !== -1) {
                fastPointer = findNextIndex(arr, fastPointer, loopDirectionFlag)
            }

            if (slowPointer === -1 || fastPointer === -1 || slowPointer === fastPointer) {
                break
            }
        }
        if (slowPointer !== -1 && slowPointer === fastPointer) {
            return true
        }
    }
    return false;
};

// console.log(`${circular_array_loop_exists([1, 2, -1, 2, 2])}`)
// console.log(`${circular_array_loop_exists([2, 2, -1, 2])}`)
// console.log(`${circular_array_loop_exists([2, 1, -1, -2])}`)
