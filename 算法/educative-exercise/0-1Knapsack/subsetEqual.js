/**
 * Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both subsets is equal.
 */

// brute-force
// time: 2 ^ n
// space: n
const can_partition = function (num) {
    if (!num || !num.length) {
        return false;
    }

    function partitionRecursive(num, sum, curIndex) {
        // exit check
        if (sum === 0) {
            return true;
        }
        if (curIndex >= num.length) {
            return false;
        }

        // check is valid
        // put this num in sum calc
        if (num[curIndex] <= sum) {
            if (partitionRecursive(num, sum - num[curIndex], curIndex + 1)) {
                return true;
            }
        }
        // not put in the sum calc
        return partitionRecursive(num, sum, curIndex + 1);
    }

    const sum = num.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) {
        return false;
    }

    return partitionRecursive(num, sum / 2, 0);
};

// top-down dp with hash table

console.log(`Can partition: ${can_partition([1, 2, 3, 4])}`);
console.log(`Can partition: ${can_partition([1, 1, 3, 4, 7])}`);
console.log(`Can partition: ${can_partition([2, 3, 4, 6])}`);
