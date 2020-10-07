/**
 * Given a positive integer, return all possible sum combinations for this number using positive integers.
 */

// 回溯
// time: 2 ^ n
// space: n

const tempArr = [];
function calcNumRecursive(target, result, start) {
    // exit judge
    if (target === 0 && tempArr.length > 1) {
        result.push(tempArr.slice());
        return;
    }

    for (let i = start; i <= target; i++) {
        // setNumber
        tempArr.push(i);

        calcNumRecursive(target - i, result, i);

        // removeNumberx
        tempArr.pop();
    }

    return;
}

let printAllSum = function (target) {
    if (target <= 0) {
        return 0;
    }

    const result = [];
    calcNumRecursive(target, result, 1);

    return result;
};

let n = 4;
console.log("All sum combinations of", n);
console.log(printAllSum(n));
