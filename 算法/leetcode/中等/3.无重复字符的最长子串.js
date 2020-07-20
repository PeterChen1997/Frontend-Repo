/**
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

 */

/**
 * @param {string} s
 * @return {number}
 */

// 思路： 经典滑动窗口题

const lengthOfLongestSubstring = (s) => {
    if (!s) {
        return 0
    }
    let windowStart = 0
    let windowEnd = 0
    let maxLength = 0
    let charCounterObj = {}
    for (let i = 0; i < s.length; i++) {
        let curChar = s[i]
        if (charCounterObj[curChar]) {
            charCounterObj[curChar]++
            while(charCounterObj[curChar] !== 1) {
                charCounterObj[s[windowStart]]--
                windowStart++
            }
        } else {
            charCounterObj[curChar] = 1
            maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
        }
        windowEnd++
    }
    return maxLength
};

console.log(lengthOfLongestSubstring('pwwkew'))