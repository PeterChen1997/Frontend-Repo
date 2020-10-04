/**
 * 给定两个整数数组来表示'N'个商品的权重和利润，我们需要找到这些商品的子集，这将给我们带来最大的利润，以使它们的累计权重不超过给定数字'C'。每个项目只能选择一次，这意味着我们要么将项目放入背包，要么跳过它
 */

// 自底向上导出dp
// time: N * C
// space: N * C + N

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

    const dp = new Array(profits.length)
        .fill(0)
        .map((_) => new Array(capacity + 1).fill(0));

    // 遍历column
    for (let i = 0; i < profits.length; i++) dp[i][0] = 0;
    // 遍历row
    for (let j = 0; j <= capacity; j++)
        dp[0][j] = j >= weights[0] ? profits[0] : 0;

    // 开始遍历剩下的内容
    for (let i = 1; i < profits.length; i++) {
        for (let j = 1; j <= capacity; j++) {
            let profitOne = 0;
            if (weights[i] <= j) {
                profitOne = profits[i] + dp[i - 1][j - weights[i]];
            }
            let profitTwo = dp[i - 1][j];

            dp[i][j] = Math.max(profitOne, profitTwo);
        }
    }

    return dp[profits.length - 1][capacity];
}

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(
    `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
);
console.log(
    `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
);
