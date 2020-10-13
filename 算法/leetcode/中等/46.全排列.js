/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 * @param {*} nums 
 */

function permute(nums) {
    function permutationRec(tempArr, result) {
        if (tempArr.length === nums.length) {
            result.push([...tempArr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (tempArr.includes(nums[i])) {
                continue;
            }

            tempArr.push(nums[i]);
            permutationRec(tempArr, result);
            tempArr.pop();
        }

        return result;
    }

    if (!nums || !nums.length) {
        return [];
    }

    return permutationRec([], []);
}
