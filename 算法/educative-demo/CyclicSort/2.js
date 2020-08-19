/**
 * Find the Smallest Missing Positive Number (medium) #
Given an unsorted array containing numbers, find the smallest missing positive number in it.

Example 1:

Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'
Example 2:

Input: [3, -2, 0, 1, 2]
Output: 4
Example 3:

Input: [3, 2, 5, 1]
Output: 4
 */

const find_first_missing_positive = function(nums) {
    let i = 0
    // loop to find the positive numbers' pos
    while (i < nums.length) {
        let num = nums[i]
        let targetPosNum = nums[nums[i] - 1]
        let targetPos = nums[i] - 1
        if (num > 0 && num <= nums.length && num !== targetPosNum) {
            [nums[i], nums[targetPos]] = [nums[targetPos], nums[i]]
        } else {
            i++
        }
    }

    // find first not positive number
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return -1
};

// console.log(find_first_missing_positive([-3, 1, 5, 4, 2]));