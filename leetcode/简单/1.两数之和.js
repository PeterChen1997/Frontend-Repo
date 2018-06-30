/*
  给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

  你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

  示例:

  给定 nums = [2, 7, 11, 15], target = 9

  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1]
*/

// 首遍思路： 使用两个指针，执行n*(n - 1) / 2找出结果
// 较好思路： 使用一遍哈希表，在存入map的时候，检查是否有合适的元素存在于map中
// 时间复杂度：o(n2) -> o(n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let numsMap = new Map()

  for(let index = 0; index < nums.length; index++) {
    const num = nums[index]
    const complement = target - num

    if (numsMap.has(complement)) {
      return [numsMap.get(complement), index]
    } else {
      numsMap.set(num, index)
    }
  }
  
  return null
}

console.log(twoSum([2, 7, 11, 15], 9))