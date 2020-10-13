/**
 * 给你一个整数数组 nums，请你将该数组升序排列。

 

示例 1：

输入：nums = [5,2,3,1]
输出：[1,2,3,5]
示例 2：

输入：nums = [5,1,1,2,0,0]
输出：[0,0,1,1,2,5]
 

提示：

1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000
 */

// 快速排序

/**
 * @param {number[]} nums
 * @return {number[]}
 */

function partion(arr, start, end) {
    let pivot = arr[end];

    let i = start - 1
    for (let j = start; j < end; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];

    return i + 1
}

function randomPartion(arr, start, end) {
    let randomMid = Math.floor(Math.random() * (end - start + 1)) + start;
    [arr[randomMid], arr[end]] = [arr[end], arr[randomMid]];
    return partion(arr, start, end);
}

function quickSort(arr, start, end) {
    if (start < end) {
        let pos = randomPartion(arr, start, end)
        quickSort(arr, start, pos - 1)
        quickSort(arr, pos + 1, end)
    }
}

var sortArray = function(nums) {
    if (!nums || !nums.length) {
        return nums
    }

    quickSort(nums, 0, nums.length - 1)
    return nums
};

console.log(sortArray([5, 2, 3, 1, 0, 0]))