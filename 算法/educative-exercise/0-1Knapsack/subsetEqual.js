/**
 * Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both subsets is equal.
 */

// brute-force
// time: 2 ^ n
// space: n
const canPartition = function (num) {
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

    if (!num || !num.length) {
        return false;
    }

    const sum = num.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) {
        return false;
    }

    return partitionRecursive(num, sum / 2, 0);
};

// top-down dp with hash table
// time: N * S
// space: N * S
function canPartition2(num) {
    function canPartitionRecursive(dp, num, sum, curIndex) {
        // jump out status
        if (sum === 0) {
            return true;
        }
        if (curIndex >= num.length) {
            return false;
        }

        dp[curIndex] = dp[curIndex] || [];
        if (!dp[curIndex][sum]) {
            // recursive judge
            if (num[curIndex] <= sum) {
                if (
                    canPartitionRecursive(
                        dp,
                        num,
                        sum - num[curIndex],
                        curIndex + 1
                    )
                ) {
                    dp[curIndex][sum] = true;
                    return true;
                }
            }

            dp[curIndex][sum] = canPartitionRecursive(
                dp,
                num,
                sum,
                curIndex + 1
            );
        }

        return dp[curIndex][sum];
    }

    if (!num || !num.length) {
        return false;
    }

    const sum = num.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) {
        return false;
    }

    const dp = [];
    return canPartitionRecursive(dp, num, sum / 2, 0);
}

// bottom - up dynamic programing
// dp[i][s] = num[i] + dp[i - 1][s - num[i]] || dp[i - 1][s]
// time: N * S
// space: N * S
function canPartition3(num) {
    if (!num || !num.length) {
        return false;
    }

    const len = num.length;
    let sum = num.reduce((a, b) => a + b, 0);

    if (sum % 2 !== 0) {
        return false;
    }

    // find a subset calc to sum
    sum /= 2;

    // init dp
    const dp = new Array(len)
        .fill(0)
        .map((_) => new Array(sum + 1).fill(false));

    // init first row
    for (let i = 0; i < len; i++) dp[i][0] = true;

    // init first column
    for (let s = 0; s < sum; s++) dp[0][s] = num[0] === s;

    // process all subsets
    for (let i = 1; i < len; i++) {
        for (let s = 1; s <= sum; s++) {
            if (dp[i - 1][s]) {
                dp[i][s] = true;
            } else if (s >= num[i]) {
                dp[i][s] = dp[i - 1][s - num[i]];
            }
        }
    }

    return dp[len - 1][sum];
}

console.log(`Can partition: ${canPartition3([1, 2, 3, 4])}`);
console.log(`Can partition: ${canPartition3([1, 1, 3, 4, 7])}`);
console.log(`Can partition: ${canPartition3([2, 3, 4, 6])}`);
