/**
 * Given an array of numbers which is sorted in ascending order and is rotated ‘k’ times around a pivot, find ‘k’.

You can assume that the array does not have any duplicates.
 */

const count_rotations = function (arr) {
    if (!arr || !arr.length) {
        return -1
    }

    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let mid = start + Math.floor((end - start) / 2)

        if (arr[mid] > arr[mid + 1]) {
            return mid + 1
        } else if (arr[mid - 1] > arr[mid]) {
            return mid
        }

        if (arr[start] < arr[mid]) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return 0;
};
s

console.log(count_rotations([10, 15, 1, 3, 8]))
console.log(count_rotations([4, 5, 7, 9, 10, -1, 2]))
console.log(count_rotations([1, 3, 8, 10]))
