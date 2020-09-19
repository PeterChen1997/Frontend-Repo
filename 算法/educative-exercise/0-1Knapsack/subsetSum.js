/**
 * Given a set of positive numbers, determine if a subset exists whose sum is equal to a given number ‘S’.

Example 1: #
Input: {1, 2, 3, 7}, S=6
Output: True
The given set has a subset whose sum is '6': {1, 2, 3}
Example 2: #
Input: {1, 2, 7, 1, 5}, S=10
Output: True
The given set has a subset whose sum is '10': {1, 2, 7}
Example 3: #
Input: {1, 3, 4, 8}, S=6
Output: False
The given set does not have any subset whose sum is equal to '6'.
 */

// dp[i][s] = dp[i - 1][s - nums[i]] || dp[i - 1][s]
// 可以用一纬数组的dp进行优化 dp[s] = dp[s - nums[i]] || dp[s]
function canPartition(nums, target) {
    if (!nums || !nums.length) {
        return false;
    }

    const len = nums.length;
    const dp = new Array(len)
        .fill(0)
        .map((_) => new Array(target + 1).fill(false));

    // init first row / column
    for (let i = 0; i < len; i++) dp[i][0] = false;
    for (let s = 0; s <= target; s++) dp[0][s] = s === nums[0];

    // process all sub-array
    for (let i = 1; i < len; i++) {
        for (let s = 1; s <= target; s++) {
            if (dp[i - 1][s]) {
                dp[i][s] = true;
            } else if (s >= nums[i]) {
                // do not add the nums[i]
                dp[i][s] = dp[i - 1][s - nums[i]];
            }
        }
    }
    return dp[len - 1][target];
}

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(
    `Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`
);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
