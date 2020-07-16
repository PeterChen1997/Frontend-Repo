/**
给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。

请返回所有可行解 s 中最长长度。

 

示例 1：

输入：arr = ["un","iq","ue"]
输出：4
解释：所有可能的串联组合是 "","un","iq","ue","uniq" 和 "ique"，最大长度为 4。
示例 2：

输入：arr = ["cha","r","act","ers"]
输出：6
解释：可能的解答有 "chaers" 和 "acters"。
示例 3：

输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
输出：26
 

提示：

1 <= arr.length <= 16
1 <= arr[i].length <= 26
arr[i] 中只含有小写英文字母
 */

// 思路： 
// 用数组排列组合所有情况，然后选最大值
// 时间复杂度：o(2^n)
// 空间复杂度：o(n)

/**
 * @param {string[]} arr
 * @return {number}
 */
function isUnique(str) {
    return str.length === new Set(str.split('')).size
}

const maxLength = (arr) => {
    if (!arr || !arr.length) {
        return 0
    }

    let dpArr = ['']
    // 注意，这里要过滤掉自身重复的情况
    arr = arr.filter(item => isUnique(item))
    
    // 遍历每一项
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        // 遍历dp数组
        for (let j = 0; j < dpArr.length; j++) {
            const dpItem = dpArr[j]
            if (item === dpItem) {
                continue
            }
            const resStr = dpItem + item
            if (isUnique(resStr)) {
                dpArr.push(resStr)
            }
        }
    }
    // 取出最大值
    return dpArr.reduce((maxVal, str) => Math.max(maxVal, str.length), 0)
};

console.log(maxLength(["yy","bkhwmpbiisbldzknpm"]))