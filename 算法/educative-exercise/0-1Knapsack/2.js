/**
 * You are given a set of positive numbers and a target sum ‘S’. Each number should be assigned either a ‘+’ or ‘-’ sign. We need to find the total ways to assign symbols to make the sum of the numbers equal to the target ‘S’.

Example 1: #
Input: {1, 1, 2, 3}, S=1
Output: 3
Explanation: The given set has '3' ways to make a sum of '1': {+1-1-2+3} & {-1+1-2+3} & {+1+1+2-3}
Example 2: #
Input: {1, 2, 7, 1}, S=9
Output: 2
Explanation: The given set has '2' ways to make a sum of '9': {+1+2+7-1} & {-1+2+7+1}
 */

// bottom up dp
// time: N * S
// space: N * S

// key: sum(s1) - sum(s2) = target
// key: sum(s1) + sum(s2) = sum
// sum(s1) = (target + sum) / 2

function findTargetSubsets(nums, target) {
    if(!nums || !nums.length || target <= 0) {
        return 0
    }

    const sum = nums.reduce((a, b) => a + b, 0)
    const targetSum = (target + sum) / 2
    const len = nums.length
    
    if (targetSum !== Number(targetSum)) {
        return 0
    }

    const dp = new Array(len)
        .fill(0)
        .map(() => new Array(targetSum + 1).fill(0))

    for (let i = 0; i < len; i++) dp[i][0] = 1
    for (let s = 1; s <= targetSum; s++) dp[0][s] = s === nums[0] ? 1 : 0

    for (let i = 1; i < len; i++) {
        for (let s = 1; s <= targetSum; s++) {
            let resultOne = 0
            if (s >= nums[i]) {
                resultOne = dp[i - 1][s - nums[i]]
            }
            let resultTwo = dp[i - 1][s]

            dp[i][s] = resultOne + resultTwo
        }
    }

    return dp[len - 1][targetSum]
}

console.log(
    `Count of Target sum is: ---> ${findTargetSubsets([1, 1, 2, 3], 1)}`
);
console.log(
    `Count of Target sum is: ---> ${findTargetSubsets([1, 2, 7, 1], 9)}`
);
