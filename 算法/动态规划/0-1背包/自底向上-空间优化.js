/**
 * 给定两个整数数组来表示'N'个商品的权重和利润，我们需要找到这些商品的子集，这将给我们带来最大的利润，以使它们的累计权重不超过给定数字'C'。每个项目只能选择一次，这意味着我们要么将项目放入背包，要么跳过它
 */

// 自底向上导出dp
// time: N * C
// space: 2 * C
// i%2 代替 i + (i-1)%2 代替 i-1

// space: C
// c c-weight[i]

// 注意这里需要使用逆序遍历，否则会将物品的价值重复计算
// 逆序可以保证在价值判断时读取的是正确的 dp[c-weights[i]]

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

    const dp = new Array(capacity + 1).fill(0);

    for (let c = 0; c <= capacity; c++) {
        if (weights[0] <= c) dp[c] = profits[0];
    }

    // 开始遍历剩下的内容
    for (let i = 1; i < profits.length; i++) {
        for (let c = capacity; c >= 0; c--) {
            let profit1 = 0,
                profit2 = 0;
            if (weights[i] <= c) profit1 = profits[i] + dp[c - weights[i]];
            profit2 = dp[c];
            dp[c] = Math.max(profit1, profit2);
        }
    }

    return dp[capacity];
}

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(
    `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
);
console.log(
    `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
);
