/**
 * Given a set of positive numbers, partition the set into two subsets with minimum difference between their subset sums.

Example 1: #
Input: {1, 2, 3, 9}
Output: 3
Explanation: We can partition the given set into two subsets where minimum absolute difference 
between the sum of numbers is '3'. Following are the two subsets: {1, 2, 3} & {9}.
Example 2: #
Input: {1, 2, 7, 1, 5}
Output: 0
Explanation: We can partition the given set into two subsets where minimum absolute difference 
between the sum of number is '0'. Following are the two subsets: {1, 2, 5} & {7, 1}.
Example 3: #
Input: {1, 3, 100, 4}
Output: 92
Explanation: We can partition the given set into two subsets where minimum absolute difference 
between the sum of numbers is '92'. Here are the two subsets: {1, 3, 4} & {100}.
 */

// brute-force
// time: 2 ^ n
// space: n
function canPartition(nums) {
    function canPartitionRecursive(nums, curIndex, sumOne, sumTwo) {
        // break judge
        if (nums.length === curIndex) {
            return Math.abs(sumOne - sumTwo);
        }

        const diffOne = canPartitionRecursive(
            nums,
            curIndex + 1,
            sumOne + nums[curIndex],
            sumTwo
        );
        const diffTwo = canPartitionRecursive(
            nums,
            curIndex + 1,
            sumOne,
            sumTwo + nums[curIndex]
        );

        return Math.min(diffOne, diffTwo);
    }

    if (!nums || !nums.length) {
        return;
    }

    return canPartitionRecursive(nums, 0, 0, 0);
}

// top - down with hashtable
// time: N * S
// space: N * S
function canPartition2(nums) {
    function canPartitionRecursive(nums, curIndex, sumOne, sumTwo) {
        if (nums.length === curIndex) {
            return Math.abs(sumOne - sumTwo);
        }

        dp[curIndex] = dp[curIndex] || [];
        // sumTwo始终是剩余数字的总和
        if (typeof dp[curIndex][sumOne] === "undefined") {
            const diffOne = canPartitionRecursive(
                nums,
                curIndex + 1,
                sumOne + nums[curIndex],
                sumTwo
            );
            const diffTwo = canPartitionRecursive(
                nums,
                curIndex + 1,
                sumOne,
                sumTwo + nums[curIndex]
            );

            dp[curIndex][sumOne] = Math.min(diffOne, diffTwo);
        }

        return dp[curIndex][sumOne];
    }

    if (!nums || !nums.length) {
        return;
    }

    const dp = [];
    return canPartitionRecursive(nums, 0, 0, 0);
}

// bottom - up DP
// time: N * S
// space: N * S
// dp[curIndex][sumOne] = dp[curIndex - 1][sumOne] || dp[curIndex - 1][sumOne - nums[curIndex]]
// 跟找相等的subset差不多，需要尽量找到居中的元素
function canPartition3(nums) {
    if (!nums || !nums.length) {
        return;
    }

    // 找 sum / 2 即可
    const totalSum = nums.reduce((a, b) => a + b, 0);
    const sum = Math.floor(totalSum / 2);
    const len = nums.length;
    const dp = new Array(len)
        .fill(0)
        .map((_) => new Array(sum + 1).fill(false));

    for (let i = 0; i < len; i++) dp[i][0] = true;
    for (let s = 0; s <= sum; s++) dp[0][s] = nums[0] === s;

    for (let i = 1; i < len; i++) {
        for (let s = 1; s <= sum; s++) {
            if (dp[i - 1][s]) {
                dp[i][s] = true;
            } else if (s >= nums[i]) {
                dp[i][s] = dp[i - 1][s - nums[i]];
            }
        }
    }

    return totalSum - 2 * dp[len - 1].lastIndexOf(true);
}

console.log(
    `Minimum subset difference is: ---> ${canPartition3([1, 2, 3, 9])}`
);
console.log(
    `Minimum subset difference is: ---> ${canPartition3([1, 2, 7, 1, 5])}`
);
console.log(
    `Minimum subset difference is: ---> ${canPartition3([1, 3, 100, 4])}`
);
