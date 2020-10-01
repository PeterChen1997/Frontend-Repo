/**
 * Given a sorted array of integers, return the low and high index of the given key.
 */

function binarySearch(arr, target, isFindBigger) {
    let high = arr.length - 1;
    let low = 0;
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        const midVal = arr[mid];

        // judge is find val bigger than target
        if (isFindBigger) {
            if (midVal <= target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (midVal >= target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
    }

    if (isFindBigger) {
        if (high < arr.length && arr[high] === target) {
            return high;
        }
    } else {
        if (low < arr.length && arr[low] === target) {
            return low;
        }
    }

    return -1;
}

function findIndex(arr, target) {
    if (!arr || !arr.length) {
        return [0, 0];
    }

    return [binarySearch(arr, target, false), binarySearch(arr, target, true)];
}

console.log(
    findIndex(
        [
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            6,
            6,
            6,
            6,
            6,
            6,
        ],
        4
    )
);
