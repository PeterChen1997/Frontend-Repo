/**
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */

// 思路：用对象存储遍历后需要加上的值，如果后面遍历过程中又遇到就返回 (无序)

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
    if (!numbers || numbers.length <= 1) {
        return [-1, -1]
    }
    let restRecorderObj = {}
    for (let i = 0; i < numbers.length; i++) {
        let curVal = numbers[i]
        if (restRecorderObj[curVal] != undefined) {
            return [restRecorderObj[curVal] + 1, i + 1]
        } else {
            restRecorderObj[target - curVal] = i
        }
    }
    return [-1, -1]
};

console.log(twoSum([2,7,11,15], 9))