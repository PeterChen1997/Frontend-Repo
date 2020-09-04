/**
 * Given an array of numbers which is sorted in ascending order and also rotated by some arbitrary number, find if a given ‘key’ is present in it.

Write a function to return the index of the ‘key’ in the rotated array. If the ‘key’ is not present, return -1. You can assume that the given array does not have any duplicates.
 */

const search_rotated_array = function (arr, key) {
    if (!arr || !arr.length) {
        return -1
    }

    // do binary search and judge the part
    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        const mid = start + Math.floor((end - start) / 2)
        const midVal = arr[mid]

        if (midVal === key) {
            return mid
        }

        // judge sorted status - left sorted
        if (arr[start] <= arr[mid]) {
            if (key >= arr[start] && key < arr[mid]) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        } else {
            // right sorted
            if (key > arr[mid] && key <= arr[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

console.log(search_rotated_array([10, 15, 1, 3, 8], 15))
console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 10))
