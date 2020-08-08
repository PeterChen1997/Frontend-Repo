/**
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

示例 1 :

输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
说明 :

数组的长度为 [1, 20,000]。
数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
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

console.log(subarraySum([0, 1, 2, 3], 3))