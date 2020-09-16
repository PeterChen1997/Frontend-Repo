/**
 * Given the weights and profits of ‘N’ items, we are asked to put these items in a knapsack which has a capacity ‘C’. The goal is to get the maximum profit out of the items in the knapsack. Each item can only be selected once, as we don’t have multiple quantities of any item.

Let’s take the example of Merry, who wants to carry some fruits in the knapsack to get maximum profit. Here are the weights and profits of the fruits:

Items: { Apple, Orange, Banana, Melon }
Weights: { 2, 3, 1, 4 }
Profits: { 4, 5, 3, 7 }
Knapsack capacity: 5

Let’s try to put various combinations of fruits in the knapsack, such that their total weight is not more than 5:

Apple + Orange (total weight 5) => 9 profit
Apple + Banana (total weight 3) => 7 profit
Orange + Banana (total weight 4) => 8 profit
Banana + Melon (total weight 5) => 10 profit

This shows that Banana + Melon is the best combination as it gives us the maximum profit and the total weight does not exceed the capacity.
 */

// 方法一：暴力枚举
// time: 2^n
// space: n
function solveKnapsack(profits, weights, capacity) {
    function solveKnapsackRecursive(profits, weights, capacity, curIndex) {
        // judge jumpout status
        if (capacity <= 0 || curIndex > profits.length) {
            return 0
        }

        // put in the bag 
        let profitOne = 0
        if (capacity >= weights[curIndex]) {
            profitOne = profits[curIndex] + solveKnapsackRecursive(profits, weights, capacity - weights[curIndex], curIndex + 1)
        }

        // not put in the bag
        let profitTwo = solveKnapsackRecursive(profits, weights, capacity, curIndex + 1)

        return Math.max(profitOne, profitTwo)
    }

    return solveKnapsackRecursive(profits, weights, capacity, 0)
}

// 方法二：自上而下的DP
// time: N * C
// space: N * C + N
function solveKnapsack2(profits, weights, capacity) {
    const dp = []
    function solveKnapsackRecursive(profits, weights, capacity, curIndex) {
        // judge jumpout status
        if (capacity <= 0 || curIndex > profits.length) {
            return 0
        }

        dp[curIndex] = dp[curIndex] || []
        if (dp[curIndex][capacity]) {
            return dp[curIndex][capacity]
        }

        // put in the bag 
        let profitOne = 0
        if (capacity >= weights[curIndex]) {
            profitOne = profits[curIndex] + solveKnapsackRecursive(profits, weights, capacity - weights[curIndex], curIndex + 1)
        }

        // not put in the bag
        let profitTwo = solveKnapsackRecursive(profits, weights, capacity, curIndex + 1)

        dp[curIndex][capacity] = Math.max(profitOne, profitTwo)
        return dp[curIndex][capacity]
    }

    return solveKnapsackRecursive(profits, weights, capacity, 0)
}

// 方法三：自下而上的DP
// dp[i][c] = Math.max(dp[i - 1][c], profit[i] + dp[i - 1][c - weight[i]])
function solveKnapsack3(profits, weights, capacity) {
    if (capacity <= 0 || profits.length < 0 || profits.length !== weights.length) {
        return 0
    }

    const len = profits.length
    const dp = new Array(len)
        .fill(0)
        .map(_ => new Array(capacity).fill(0))

    // init empty capacity value
    for (let i = 0; i < len; i++) {
        dp[i][0] = 0
    }

    // init first line value
    for (let c = 0; c <= capacity; c++) {
        if (c >= weights[0]) {
            dp[0][c] = profits[0]
        }
    }

    // iterate for others situation
    for (let i = 1; i < len; i++) {
        for (let c = 1; c <= capacity; c++) {
            // judge for max value
            let profitOne = 0
            if (c >= weights[i]) {
                profitOne = profits[i] + dp[i - 1][c - weights[i]]
            }

            let profitTwo = dp[i - 1][c]

            // get maximum
            dp[i][c] = Math.max(profitOne, profitTwo)
        }
    }

    // return max
    return dp[len - 1][capacity]
}

// 方法三（优化）：自下而上DP，空间复杂度优化


var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack3(profits, weights, 7)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsack3(profits, weights, 6)}`);