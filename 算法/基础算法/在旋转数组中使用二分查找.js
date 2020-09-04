/**
 * Search for a given number in a sorted array, with unique elements, that has been rotated by some arbitrary number. Return -1 if the number does not exist.

Assume that the array does not contain duplicates.
 */

let binarySearchRotated = function (arr, key) {
    if (!arr || !arr.length) {
        return -1
    }

    // do binary search
    let startIndex = 0
    let endIndex = arr.length - 1
    while (startIndex <= endIndex) {
        let midIndex = startIndex + Math.floor((endIndex - startIndex) / 2)

        let midValue = arr[midIndex]
        let highValue = arr[endIndex]
        let startValue = arr[startIndex]

        if (midValue === key) {
            return midIndex
        }

        // normal status
        if (key > midValue && key <= highValue && highValue >= midValue) {
            startIndex = midIndex + 1
        } else if (key < midValue && key >= startValue && startValue <= midValue) {
            endIndex = midIndex - 1
        } else {
            // unsorted status
            if (startValue >= midValue) {
                endIndex = midIndex - 1
            } else if (highValue <= midValue) {
                startIndex = midIndex + 1
            }
        }
    }

    return -1;
};


let v1 = [6, 7, 1, 2, 3, 4, 5];
console.log("Key(3) found at: " + binarySearchRotated(v1, 3));
console.log("Key(6) found at: " + binarySearchRotated(v1, 6));

let v2 = [4, 5, 6, 1, 2, 3];
console.log("Key(3) found at: " + binarySearchRotated(v2, 3));
console.log("Key(6) found at: " + binarySearchRotated(v2, 6));  