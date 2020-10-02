/**
 * Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value.
 */

let findSumOfTwo = function (arr, val) {
    if (!arr || !arr.length) {
        return false;
    }

    const table = {};
    for (let i = 0; i < arr.length; i++) {
        let curValue = arr[i];
        let targetValue = val - curValue;

        // judge if exist
        if (targetValue in table) {
            return true;
        }

        // insert into hashTable
        if (!(curValue in table)) {
            table[curValue] = 1;
        }
    }

    return false;
};

let v = [5, 7, 1, 2, 8, 4, 3];
let test = [3, 20, 1, 2, 7];

for (i = 0; i < test.length; i++) {
    let output = findSumOfTwo(v, test[i]);
    console.log("findSumOfTwo(v, " + test[i] + ") = " + output);
}
