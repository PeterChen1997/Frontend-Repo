/**
 * Given an integer array, sort it in ascending order using quicksort.
 */

const {
    getDataExtractorApi,
} = require("@hediet/debug-visualizer-data-extraction");
getDataExtractorApi().registerDefaultExtractors();

// method one
// time : NlogN
// space : logN for func call
let quickSort = function (arr) {
    function partition(arr, low, high) {
        let pivotValue = arr[low];
        let i = low;
        let j = high;

        while (i < j) {
            // find value bigger than pivotValue
            while (i <= high && arr[i] <= pivotValue) {
                i++;
            }

            // find value smaller than pivotValue
            while (arr[j] > pivotValue) {
                j--;
            }

            if (i < j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        // move pivotValue to the right pos
        [arr[low], arr[j]] = [arr[j], arr[low]];

        // return pos
        return j;
    }

    function qsRecursive(arr, start, end) {
        // break status
        if (start >= end) {
            return;
        }

        const q = partition(arr, start, end);
        qsRecursive(arr, start, q - 1);
        qsRecursive(arr, q + 1, end);
    }

    if (!arr || !arr.length) {
        return;
    }

    return qsRecursive(arr, 0, arr.length - 1);
};

let a = [55, 23, 26, 2, 18, 78, 23, 8, 2, 3];

console.log("Before Sorting");
console.log(a);

quickSort(a);

console.log("After Sorting");
console.log(a);
