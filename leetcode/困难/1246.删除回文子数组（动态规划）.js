/**
给你一个整数数组 arr，每一次操作你都可以选择并删除它的一个 回文 子数组 arr[i], arr[i+1], ..., arr[j]（ i <= j）。

注意，每当你删除掉一个子数组，右侧元素都会自行向前移动填补空位。

请你计算并返回从数组中删除所有数字所需的最少操作次数。

 

示例 1：

输入：arr = [1,2]
输出：2
示例 2：

输入：arr = [1,3,4,1,5]
输出：3
解释：先删除 [4]，然后删除 [1,3,1]，最后再删除 [5]。
 

提示：

1 <= arr.length <= 100
1 <= arr[i] <= 20

 */

// 思路： 动态规划，首先找到数学规律，使用二维数组保存并递归找到min值
// 时间复杂度：o(n^3)
// 空间复杂度：o(n^2)

/**
 * @param {number[]} arr
 * @return {number}
 */
function TwoDimensionArray(i, j) {
    const arr = new Array(i)
    for (let i = 0; i < j; i++) {
        arr[i] = new Array(j)
    }
    return arr
}
const minimumMoves = (arr) => {
    // edge
    if (!arr.length || !arr) {
        return 0;
    }

    const length = arr.length
    const dp = new TwoDimensionArray(length, length)
    
    // i === j 的时候 自身消除的最小步骤是1
    for (let i = 0; i < length; i++) {
        dp[i][i] = 1
    }

    // 分析二维矩阵的左下角 i <= j
    for (let j = 1; j < length; j++) {
        for (let i = j - 1; i >= 0; i--) {
            // 只剩两个数
            if (i === j - 1) {
                dp[i][j] = arr[i] === arr[j] ? 1 : 2
                continue
            }

            if (i == 0 && j == 7) {
                debugger
            }

            let min = Number.MAX_SAFE_INTEGER
            if (arr[i] === arr[j]) {
                min = Math.min(min, dp[i + 1][j - 1]) // 处理回文数中间的逻辑
            }
            // 这里要注意，上面的是可能解，需要继续判断              
            for (let k = i; k < j; k++) {
                min = Math.min(min, dp[i][k] + dp[k + 1][j])
            }
            
            dp[i][j] = min
        }
    }
    console.table(dp)
    return dp[0][length - 1]
};

console.log(minimumMoves([1,4,1,1,2,3,2,1]))