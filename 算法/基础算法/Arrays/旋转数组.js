/**
 * Given an array of integers, rotate the array by 'N' elements.
 * 
Given an array of integers, rotate the array by NN elements where NN is an integer:

For positive values of NN, perform a right rotation.
For negative values of NN, perform a left rotation.
Make sure you make changes to the original array.
 */

// method1
// time: n
// space: 1
// reverse the array and reverse back
function reverseArray(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
let rotateArray = function (arr, n) {
    if (!arr || !arr.length) {
        return arr;
    }

    const len = arr.length;
    // convert n
    n = (n + len) % len;

    // reverse arr
    reverseArray(arr, 0, len - 1);

    // reverse n and the other part
    reverseArray(arr, 0, n - 1);
    reverseArray(arr, n, len - 1);

    return arr;
};

let arr = [1, 10, 20, 0, 59, 86, 32, 11, 9, 40];

console.log("Array Before Rotation");
console.log(arr);

rotateArray(arr, 2);

console.log("Array After Rotation");
console.log(arr);
