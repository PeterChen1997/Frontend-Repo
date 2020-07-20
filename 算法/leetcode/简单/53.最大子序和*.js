/**
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解
 */

/**
 * 首遍思路：动态规划
 * 判断后续输入对于当前最大值的影响情况
 * 
 * 时间复杂度：o(n)
 * 空间复杂度：o(1)
 * 
 * 较神奇思路：分治
 * 
 * 最大值一定在下面三个区间内诞生
 * 从中间拆分的左子序列（包括最右元素）
 * 
 * 时间复杂度：o(nlogn)
 * 空间复杂度：o(logn)
 */
// 

/**
 * @param {number[]} nums
 * @return {number}
 */

// method1
// const maxSubArray = (nums) => {
//     let pre = 0 // 累和
//     let maxAns = nums[0] // 最大子序列和
//     for (const num of nums) {
//         pre = Math.max(num + pre, pre)
//         maxAns = Math.max(pre, maxAns)
//     }
//     return maxAns
// };

// method2

// 进行递归
const maxSubArrayDivideWithBorder = (arr, start, end) => {
    // 递归结束
    if (start === end) return arr[start];
    
    // 计算左右集合 的 单独最大值
    const center = (start + end) >> 1 // 左移为 * 2^n, 右移为 / 2 ^ n
    const leftMax = maxSubArrayDivideWithBorder(arr, start, center)
    const rightMax = maxSubArrayDivideWithBorder(arr, center + 1, end)

    // 计算包含边界 的 最大值

    // 左半部分
    let crossLeftMax = Number.MIN_SAFE_INTEGER
    let crossLeftSum = 0
    for (let i = center; i >= start; i--) {
        crossLeftSum += arr[i]
        crossLeftMax = Math.max(crossLeftSum, crossLeftMax)
    }

    // 右半部分
    let crossRightMax = Number.MIN_SAFE_INTEGER
    let crossRightSum = 0
    for (let i = center + 1; i <= end; i++) {
        crossRightSum += arr[i]
        crossRightMax = Math.max(crossRightSum, crossRightMax)
    }

    // 包括边界的部分
    const crossMax =  crossLeftMax + crossRightMax

    return Math.max(Math.max(leftMax, rightMax), crossMax)
}

const maxSubArray = (nums) => {
    return maxSubArrayDivideWithBorder(nums, 0, nums.length - 1)
}

console.log(maxSubArray([2, -1, 3]))