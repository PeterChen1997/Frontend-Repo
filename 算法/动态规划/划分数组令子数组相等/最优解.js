/**
 * Given a set of positive numbers, find if we can partition it into two subsets such that the sum of elements in both the subsets is equal.
 */

// 本意是找到一个组合的 sum = totalSum / 2
// time: N * S
// space: S / 2
let canPartition = function (num) {
    if (!num || !num.length) {
        return false;
    }

    const sum = num.reduce((a, b) => a + b, 0);
    const targetSum = sum / 2;

    if (targetSum !== parseInt(targetSum)) {
        return false;
    }

    const dp = new Array(targetSum + 1).fill(false);

    for (let s = 0; s <= targetSum; s++) dp[s] = num[0] === s;

    for (let i = 1; i < num.length; i++) {
        for (let s = targetSum; s > 0; s--) {
            let judgeOne = false;
            if (num[i] < s) {
                judgeOne = dp[s - num[i]];
            }
            let judgeTwo = dp[s];
            dp[s] = judgeOne || judgeTwo;
        }
    }
    return dp[targetSum];
};

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4])}`);
console.log(`Can partitioning be done: ---> ${canPartition([1, 1, 3, 4, 7])}`);
console.log(`Can partitioning be done: ---> ${canPartition([2, 3, 4, 6])}`);
