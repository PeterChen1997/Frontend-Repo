/**
 * Quadruple Sum to Target (medium) #
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:

Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.
Example 2:

Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.
 */

// 思路：找到一个元素等于 target - fisrt - second

function searchPairs(arr, target, first, second, quadruplets) {
    let left = second + 1
    let right = arr.length - 1

    while (left < right) {
        let sum = arr[first] + arr[second] + arr[left] + arr[right]

        if (sum === target) {
            quadruplets.push([arr[first], arr[second], arr[left], arr[right]])
            left++
            right--

            // 跳过重复元素
            while (left < right && arr[left] === arr[left - 1]) {
                left++
            }
            while (left < right && arr[right] === arr[right + 1]) {
                right--
            }
        } else if (sum < target) {
            left++
        } else {
            right--
        }


    }

}

const search_quadruplets = function(arr, target) {
    quadruplets = [];

    // arr sort
    arr = arr.sort((a, b) => a - b)

    // 四元组
    for (let i = 0; i < arr.length - 3; i++) {
        // 跳过重复元素
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue
        }

        for (let j = i + 1; j < arr.length - 2; j++) {
            // 跳过重复元素
            if (j > i + 1 && arr[j] === arr[j - 1]) {
                continue
            }

            searchPairs(arr, target, i, j, quadruplets)
        }
    }
    return quadruplets;
};
  
console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
