/**
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

 

说明:

初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 

示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
 */

// 首遍思路： 从前往后 双指针合并
// 较好思路： 从后往前合并
// 时间复杂度：o(n + m)
// 空间复杂度：o(1)

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
    let curNums1Pointer = 0
    let curNums1Val
    let resArrLength = m

    for (let i = 0; i < n; i++) {
        const val = nums2[i]
        curNums1Val = nums1[curNums1Pointer]

        if (curNums1Val < val) {
            while((curNums1Pointer < resArrLength) 
                && (nums1[curNums1Pointer] < val)) {
                curNums1Pointer += 1
            }
        }
        nums1.splice(curNums1Pointer, 0, val)
        curNums1Pointer += 1
        resArrLength++
    }
    nums1.splice(m + n)
};

console.log(merge(
    [1,2,3,0,0,0],
    3,
    [2,5,6],
    3,
))