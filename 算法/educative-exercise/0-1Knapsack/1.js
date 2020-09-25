/**
 * Given a set of positive numbers, find the total number of subsets whose sum is equal to a given number ‘S’.

Example 1: #
Input: {1, 1, 2, 3}, S=4
Output: 3
The given set has '3' subsets whose sum is '4': {1, 1, 2}, {1, 3}, {1, 3}
Note that we have two similar sets {1, 3}, because we have two '1' in our input.
Example 2: #
Input: {1, 2, 7, 1, 5}, S=9
Output: 3
The given set has '3' subsets whose sum is '9': {2, 7}, {1, 7, 1}, {1, 2, 1, 5}
 */

// brute-force
// time: 2 ^ n
// space: n
function countSubsets(num, sum) {
    function countSubsetsRecursive(num, sum, curIndex, preCount) {
        if (curIndex === num.length) {
            return 0;
        }

        const curCount = preCount + num[curIndex];
        if (curCount === sum) {
            return 1;
        }

        let resultOne = 0;
        if (curCount < sum) {
            resultOne = countSubsetsRecursive(num, sum, curIndex + 1, curCount);
        }
        let resultTwo = countSubsetsRecursive(num, sum, curIndex + 1, preCount);

        return resultOne + resultTwo;
    }

    if (!num || !num.length || sum <= 0) {
        return 0;
    }

    return countSubsetsRecursive(num, sum, 0, 0);
}

// top down with hashTable
// time: N * S
// space: N * S
function countSubsets2(nums, sum) {
    function countSubsetsRecursive(nums, sum, curIndex, preCount) {
        if (curIndex === nums.length) {
            return 0;
        }

        const curCount = preCount + nums[curIndex];
        if (curCount === sum) {
            return 1;
        }

        if (typeof dp[curIndex][curCount] === undefined) {
            let resultOne = 0;
            if (curCount < sum) {
                resultOne = countSubsetsRecursive(
                    nums,
                    sum,
                    curIndex + 1,
                    curCount
                );
            }
            let resultTwo = countSubsetsRecursive(
                nums,
                sum,
                curIndex + 1,
                preCount
            );
        }

        dp[curIndex][curCount] = resultOne + resultTwo;
        return dp[curIndex][curCount];
    }

    if (!nums || !nums.length || sum <= 0) {
        return 0;
    }

    const dp = []
    return countSubsetsRecursive(nums, sum, 0, 0);
}

// bottom up 
// dp[curIndex][sum] = dp[curIndex - 1][sum] + dp[curIndex - 1][sum - nums[i]]
// time: N * S
// space: N * S
function countSubsets3(nums, sum) {
    if (!nums || !nums.length || sum <= 0) {
        return 0
    }

    const len = nums.length
    const dp = new Array(len)
        .fill(0)
        .map(() => new Array(sum + 1).fill(0))

    // init first row and first col
    for (let i = 0; i < len; i++) dp[i][0] = 1
    for (let s = 1; s <= sum; s++) dp[0][s] = Number(s === nums[0])

    // itrate for dp
    for (let i = 1; i < len; i++) {
        for (let s = 1; s <= sum; s++) {
            let resultOne = 0
            if (s >= nums[i]) {
                resultOne = dp[i - 1][s - nums[i]];
            }
            let resultTwo = dp[i - 1][s]

            dp[i][s] = resultOne + resultTwo
        }
    }
    
    return dp[len - 1][sum]
}

// bottom up optimize
// time: N * S
// space: S
// sum-- to avoid the dp override
function countSubsets4(nums, sum) {
    if (!nums || !nums.length || sum <= 0) {
        return 0
    }

    const dp = new Array(sum + 1).fill(0)
    dp[0] = 1 // 类似上方 dp[i][0] = 1

    for (let s = 1; s <= sum; s++) dp[s] = s === nums[0] ? 1 : 0

    for (let i = 1; i < nums.length; i++) {
        for (let s = sum; s >= 0; s--) {
            if (s >= nums[i]) {
                dp[s] += dp[s - nums[i]]
            }
        }
    }

    return dp[sum]
}

console.log(`Count of subset sum is: ---> ${countSubsets4([1, 1, 2, 3], 4)}`);
console.log(
    `Count of subset sum is: ---> ${countSubsets4([1, 2, 7, 1, 5], 9)}`
);
