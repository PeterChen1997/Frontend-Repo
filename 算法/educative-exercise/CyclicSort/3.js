/**
 * Find the First K Missing Positive Numbers (hard) #
Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.
Example 2:

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.
Example 3:

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.
 */

const find_first_k_missing_positive = function(nums, k) {
    const missingNumbers = [];

    // cyclic sort
    let i = 0
    while (i < nums.length) {
        let j = nums[i] - 1
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== nums[j]) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
        } else {
            i++
        }
    }    
    console.log(nums)

    // find not sort numbers
    const extraNumbersSet = new Set()
    for (let i = 0; i < nums.length; i++) {
        if (missingNumbers.length < k) {
            if (nums[i] - 1 !== i) {
                extraNumbersSet.add(nums[i])
                missingNumbers.push(i + 1)
            }
        }
    }
    
    // add candidate numbers
    i = 1
    while (missingNumbers.length < k) {
        let candidateNumber = i + nums.length
        if (!extraNumbersSet.has(candidateNumber)) {
            missingNumbers.push(candidateNumber)
        }
        i++
    }

    return missingNumbers;
};
  

// console.log(find_first_k_missing_positive([2, 3, 4], 3));
// console.log(find_first_k_missing_positive([2, 3, 4], 3));
// console.log(find_first_k_missing_positive([-2, -3, 4], 2));