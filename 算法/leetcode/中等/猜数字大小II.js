/**
 * 我们正在玩一个猜数游戏，游戏规则如下：

我从 1 到 n 之间选择一个数字，你来猜我选了哪个数字。

每次你猜错了，我都会告诉你，我选的数字比你的大了或者小了。

然而，当你猜了数字 x 并且猜错了的时候，你需要支付金额为 x 的现金。直到你猜到我选的数字，你才算赢得了这个游戏。

示例:

n = 10, 我选择了8.

第一轮: 你猜我选择的数字是5，我会告诉你，我的数字更大一些，然后你需要支付5块。
第二轮: 你猜是7，我告诉你，我的数字更大一些，你支付7块。
第三轮: 你猜是9，我告诉你，我的数字更小一些，你支付9块。

游戏结束。8 就是我选的数字。

你最终要支付 5 + 7 + 9 = 21 块钱。
给定 n ≥ 1，计算你至少需要拥有多少现金才能确保你能赢得这个游戏。
 */

/**
 * @param {number} n
 * @return {number}
 */

// method1: brute
function getMoneyRec(start, end) {
    if (start >= end) {
        return 0
    }

    let cost = Number.MAX_SAFE_INTEGER
    for (let i = start; i <= end; i++) {
        let res =
            i + Math.max(getMoneyRec(start, i - 1), getMoneyRec(i + 1, end));
        cost = Math.min(cost, res)
    }

    return cost
}
var getMoneyAmount1 = function(n) {
    return getMoneyRec(1, n)
};

// method2: optimize brute
// use (end + start) / 2 inplace of start

// method3: opti brute 2
const dp = []
function getMoneyRec2(start, end) {
    if (start >= end) {
        return 0;
    }

    dp[start] = dp[start] || []
    if (dp[start][end]) {
        return dp[start][end]
    }

    dp[start][end] = Number.MAX_SAFE_INTEGER;
    for (let i = Math.floor((start + end) / 2); i <= end; i++) {
        let res =
            i + Math.max(getMoneyRec2(start, i - 1), getMoneyRec2(i + 1, end));
        dp[start][end] = Math.min(dp[start][end], res);
    }

    return dp[start][end];
}
var getMoneyAmount2 = function (n) {
    return getMoneyRec2(1, n);
};

console.log(getMoneyAmount2(10))

// method4: dp
// cost(i, j) = x + Math.max(cost(i, j - 1), cost(i + 1, j))