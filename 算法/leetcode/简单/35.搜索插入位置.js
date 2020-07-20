/**
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0

 */

// 首遍思路： 遍历计算
// 较好思路： 二分查找（logn）
// 时间复杂度：o(logn)
// 空间复杂度：o(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = Math.round(left + ((right - left) / 2)) // 考虑整型溢出
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return left
};

console.log(searchInsert([1,3,5,6], 5))