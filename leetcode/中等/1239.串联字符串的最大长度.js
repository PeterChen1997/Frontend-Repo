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

// 初次思路： 用数组排列组合所有情况，然后选最大值
// 较优思路： 用递归dfs来构造答案，可以节省空间复杂度
// 时间复杂度：o(2^n)
// 空间复杂度：o(n)

/**
 * @param {string[]} arr
 * @return {number}
 */

// answer 1
function isUnique(str) {
    return str.length === new Set(str.split('')).size
}

const maxLength1 = (arr) => {
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

// answer 2
function countOneInBinary(binaryNumber) {
    let counter = 0
    for (let i = 0; i < 32; i++) {
        if ((1 << i) & binaryNumber) {
            counter++
        }
    }
    return counter
}
const maxLength = (arr) => {
    let ans = 0

    if (!arr || !arr.length) {
        return ans
    }

    // 数组转二进制 + 校验（去除自身重复元素）
    let filterArr = []
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        let binaryItem = 0
        for (let i = 0; i < item.length; i++) {
            binaryItem += 1 << item[i].codePointAt(0) - 'a'.codePointAt(0)
        }
        if (countOneInBinary(binaryItem) === item.length) {
            filterArr.push(binaryItem)
        }
    }

    function dfs(index, binaryMask) {
        ans = Math.max(ans, countOneInBinary(binaryMask))
        for (let i = index; i < filterArr.length; i++) {
            if ((filterArr[i] & binaryMask) === 0) {
                dfs(i + 1, filterArr[i] | binaryMask)
            }
        }
    }

    dfs(0, 0)

    return ans
}

console.log(maxLength(["un","iq","ue"]))