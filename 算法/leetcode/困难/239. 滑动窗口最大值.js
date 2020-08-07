/**
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。

 

进阶：

你能在线性时间复杂度内解决此题吗？

 

示例:

输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
输出: [3,3,5,5,6,7] 
解释: 

  滑动窗口的位置                最大值
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

提示：

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
1 <= k <= nums.length

 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 使用双向队列，保存遍历过程中的最大值


var maxSlidingWindow = function(nums, k) {
    const tempMaxArr = []
    const maxArr = []
    function cleanArr(i, k) {
        // 处理窗口外移除元素
        if (tempMaxArr[0] === i - k) {
            tempMaxArr.shift()
        }
        // 删除比新增元素小的元素
        while(nums[i] > nums[tempMaxArr[tempMaxArr.length - 1]]) {
            tempMaxArr.pop()
        }
    }

    for (let i = 0; i < k; i++) {
        cleanArr(i, k)
        tempMaxArr.push(i)
    }
    maxArr.push(nums[tempMaxArr[0]])

    for (let i = k; i < nums.length; i++) {
        cleanArr(i, k)
        tempMaxArr.push(i)
        maxArr.push(nums[tempMaxArr[0]])
    }
    return maxArr
};
console.log(maxSlidingWindow([7,2,4], 2))