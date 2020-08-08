/**
 * 给出矩阵 matrix 和目标值 target，返回元素总和等于目标值的非空子矩阵的数量。

子矩阵 x1, y1, x2, y2 是满足 x1 <= x <= x2 且 y1 <= y <= y2 的所有单元 matrix[x][y] 的集合。

如果 (x1, y1, x2, y2) 和 (x1', y1', x2', y2') 两个子矩阵中部分坐标不同（如：x1 != x1'），那么这两个子矩阵也不同。

 

示例 1：

输入：matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
输出：4
解释：四个只含 0 的 1x1 子矩阵。
示例 2：

输入：matrix = [[1,-1],[-1,1]], target = 0
输出：5
解释：两个 1x2 子矩阵，加上两个 2x1 子矩阵，再加上一个 2x2 子矩阵。
 

提示：

1 <= matrix.length <= 300
1 <= matrix[0].length <= 300
-1000 <= matrix[i] <= 1000
-10^8 <= target <= 10^8

 */

 /**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */

// 使用前缀和数组来把二维数组转一纬，再通过滑动窗口计算符合要求的数值

function validatePrefixCount(nums, k) {
    // build prefixSum
    const prefixSum = []
    let counter = 0
    for (let i = 0; i < nums.length; i++) {
        counter += nums[i]
        prefixSum[i] = counter
    }

    // 对于j而言，就是找到符合 prefixSum[j] - k = prefixSum[i - 1]的i的个数
    const hashMap = new Map()
    let pairs = 0
    hashMap.set(0, 1)
    for (let j = 0; j < prefixSum.length; j++) {
        const prefixValue = prefixSum[j] - k
        // 有这种prefixValue值
        if (hashMap.has(prefixValue)) {
            pairs += hashMap.get(prefixValue)
        }

        // 更新prefixSum
        if (!hashMap.has(prefixSum[j])) {
            hashMap.set(prefixSum[j], 1)
        } else {
            hashMap.set(prefixSum[j], hashMap.get(prefixSum[j]) + 1)
        }
    }
    return pairs
};

var numSubmatrixSumTarget = function(matrix, target) {
    // 判断边界条件
    if (!matrix || !matrix.length || !matrix[0].length) {
        return 0
    }

    let resultCounter = 0

    // 按 行 计算数组前缀和
    const prefixSumArr = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length))
    for (let i = 0; i < matrix.length; i++) {
        let counter = 0
        for (let j = 0; j < matrix[0].length; j++) {
            counter += matrix[i][j]
            prefixSumArr[i][j] = counter
        }
    }

    // 任意 j / k 两列之间进行计算，转二维为一维
    for (let j = 0; j < matrix[0].length; j++) {
        for (let k = j; k < matrix[0].length; k++) {
            const temp = []
            for (let i = 0; i < matrix.length; i++) {
                temp[i] = prefixSumArr[i][k] - (j === 0 ? 0 : prefixSumArr[i][j - 1])
            }
            resultCounter += validatePrefixCount(temp, target)
        }
    }
    return resultCounter
};

console.log(numSubmatrixSumTarget(
    [[0,1,0],[1,1,1],[0,1,0]],
    0
))