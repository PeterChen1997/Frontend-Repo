/**
 * Given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one; find the missing number.
 */

let findMissing = function (input) {
    //  calculate sum of all integers
    //  in input list

    let actualSum = 0;
    for (let i in input) {
        actualSum += input[i];
    }
    //  There is exactly 1 number missing
    let n = input.length + 1;
    let sumOfN = Math.floor((n * (n + 1)) / 2);
    return sumOfN - actualSum;
};

let v = [3, 7, 1, 2, 8, 4, 5];
console.log("Original:", v);
let missingNumber = findMissing(v);
console.log("The missing number is " + missingNumber);