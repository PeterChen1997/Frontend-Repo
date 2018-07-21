/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 
*/

// 思路：用最短的遍历其他的
// 时间复杂度：o(mn)

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
    let shortestStr = strs.sort((pre, next) => pre > next)[0]

    if (!shortestStr) {
        return ''
    }
    
    for(let i = shortestStr.length; i > 0; i--) {
        let sameStr = shortestStr.slice(0, i)
        let sign = strs.every((str) => str.startsWith(sameStr))
        if (sign) {
            return sameStr
        }
    }

    return ''
};

console.log(longestCommonPrefix(["dog","racecar","car"]))