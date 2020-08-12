/**
 * Minimum Window Sort (medium) #
Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

Example 1:

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
Example 2:

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
Example 3:

Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted
Example 4:

Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted.
 */

const shortest_window_sort = function(arr) {
    let low = 0
    let high = arr.length - 1

    // 从前往后找到第一个没sort的元素
    while (low < arr.length - 1 && arr[low] < arr[low + 1]) {
        low++
    }

    // 判断是否有序
    if (low === arr.length - 1) {
        return 0
    }

    // 从后往前找到最后一个没sort的元素
    while (high > low && arr[high - 1] < arr[high]) {
        high--
    }

    let minVal = Number.MIN_SAFE_INTEGER
    let maxVal = Number.MAX_SAFE_INTEGER

    let unsortedArr = arr.slice(low, high)
    let unsortedArrMin = unsortedArr.length ? Math.min(...unsortedArr) : minVal
    let unsortedArrMax = unsortedArr.length ? Math.max(...unsortedArr) : maxVal

    // 扩充unsortArr的范围
    while (low > 0 && arr[low - 1] > unsortedArrMin) {
        low--
    }
    while (high < arr.length - 1 && arr[high + 1] < unsortedArrMax) {
        high++
    }

    return high - low + 1
};

console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));
console.log(shortest_window_sort([1, 3, 2, 0, -1, 7, 10]));
console.log(shortest_window_sort([1, 2, 3]));
console.log(shortest_window_sort([3, 2, 1]));
