/**
 * Move all zeros to the left of an array while maintaining its order.
 */

// 难点在于保证顺序
// time: N
// space: 1
function moveZerosToLeft(arr) {
    if (!arr || !arr.length) {
        return arr;
    }

    const len = arr.length;
    let writePointer = len - 1;
    let readPointer = len - 1;

    // reset value
    while (readPointer >= 0) {
        if (arr[readPointer] === 0) {
            readPointer--;
            continue;
        }

        [arr[readPointer], arr[writePointer]] = [
            arr[writePointer],
            arr[readPointer],
        ];

        readPointer--;
        writePointer--;
    }

    // zero set
    while (writePointer >= 0) {
        arr[writePointer] = 0;
        writePointer--;
    }

    return arr;
}

let v = [1, 10, 20, 0, 59, 63, 0, 88, 0];
console.log("Original Array: [" + v + "]");

moveZerosToLeft(v);

console.log("After Moving Zeros: [" + v + "]");
