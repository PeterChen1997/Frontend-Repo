/**
 * Given a set of positive numbers, determine if there exists a subset whose sum is equal to a given number ‘S’.
 * @param {*} num
 */
let canPartition = function (num, targetSum) {
    if (!num || !num.length) {
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

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(
    `Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`
);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
