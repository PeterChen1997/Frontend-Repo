/**
 * 给定两个整数数组来表示'N'个商品的权重和利润，我们需要找到这些商品的子集，这将给我们带来最大的利润，以使它们的累计权重不超过给定数字'C'。每个项目只能选择一次，这意味着我们要么将项目放入背包，要么跳过它
 */

// 使用hashtable缓存子问题答案
// time: N * C
// space: N * C + N

const dp = [];
function knapsackRecursive(profits, weights, capacity, curIndex) {
    if (curIndex >= profits.length || capacity <= 0) {
        return 0;
    }

    dp[capacity] = dp[capacity] || [];

    if (dp[capacity][curIndex]) return dp[capacity][curIndex];

    let profitOne = 0;
    if (weights[curIndex] <= capacity) {
        profitOne =
            profits[curIndex] +
            knapsackRecursive(
                profits,
                weights,
                capacity - weights[curIndex],
                curIndex + 1
            );
    }
    let profitTwo = knapsackRecursive(profits, weights, capacity, curIndex + 1);

    dp[capacity][curIndex] = Math.max(profitOne, profitTwo);

    return dp[capacity][curIndex];
}

function solveKnapsack(profits, weights, capacity) {
    if (
        capacity <= 0 ||
        !profits ||
        !profits.length ||
        !weights ||
        !weights.length
    ) {
        return 0;
    }

    return knapsackRecursive(profits, weights, capacity, 0);
}

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(
    `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
);
console.log(
    `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
);
