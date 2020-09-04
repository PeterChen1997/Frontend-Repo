/**
 * Given a Bitonic array, find if a given ‘key’ is present in it. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing. Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.
 */

const binarySearch = function(arr, key, isAsc) {
    if (!arr || !arr.length) {
        return -1
    }

    let start = 0
    let end = arr.length - 1
    while (start <= end) {
        const midIndex = start + Math.floor((end - start) / 2)
        const mid = arr[midIndex]

        if (mid === key) {
            return midIndex
        } else if (mid < key) {
            if (isAsc) {
                start = midIndex + 1
            } else {
                end = midIndex - 1
            }
        } else {
            if (isAsc) {
                end = midIndex - 1
            } else {
                start = midIndex + 1
            }
        }
    }

    return -1
}

const findBiggestIndexInBitonicArray = function(arr) {
    if (!arr || !arr.length) {
        return -1
    }

    let start = 0
    let end = arr.length
    while (start < end) {
        const midIndex = start + Math.floor((end - start) / 2)

        if (arr[midIndex] > arr[midIndex + 1]) {
            end = midIndex
        } else {
            start = midIndex + 1
        }
    }

    return start
}

const search_bitonic_array = function (arr, key) {
    // find biggest index of the array
    const biggestIndex = findBiggestIndexInBitonicArray(arr)

    // separately find the key index
    const leftBinarySearch = binarySearch(arr.slice(0, biggestIndex), key, true)
    const rightBinarySearch = binarySearch(arr.slice(biggestIndex), key, false)

    if (leftBinarySearch !== -1) {
        return leftBinarySearch
    } else if (rightBinarySearch !== -1) {
        return biggestIndex + rightBinarySearch
    }

    return -1;
};


console.log(search_bitonic_array([1, 3, 8, 4, 3], 4))
console.log(search_bitonic_array([3, 8, 3, 1], 8))
console.log(search_bitonic_array([1, 3, 8, 12], 12))
console.log(search_bitonic_array([10, 9, 8], 10))
