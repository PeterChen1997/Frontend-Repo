/**
给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 k 次。在执行上述操作后，找到包含重复字母的最长子串的长度。

注意:
字符串长度 和 k 不会超过 104。

示例 1:

输入:
s = "ABAB", k = 2

输出:
4

解释:
用两个'A'替换为两个'B',反之亦然。
示例 2:

输入:
s = "AABABBA", k = 1

输出:
4

解释:
将中间的一个'A'替换为'B',字符串变为 "AABBBBA"。
子串 "BBBB" 有最长重复字母, 答案为 4。

 */

// 思路：典型滑动窗口

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = (s, k) => {
    function findBiggestCharCount(obj) {
        const values = Object.values(obj)
        return Math.max(...values)
    }

    let windowStart = 0
    let windowEnd = 0
    let leftChangeChance
    let maxLength = Number.MIN_SAFE_INTEGER
    let charMap = {}

    while (windowEnd < s.length) {
        const char = s[windowEnd]
        
        windowEnd++
        
        // 更新窗口信息
        charMap[char] ? charMap[char]++ : charMap[char] = 1
        leftChangeChance = k - (windowEnd - windowStart - findBiggestCharCount(charMap))
        if (!leftChangeChance) {
            maxLength = Math.max(maxLength, windowEnd - windowStart)
        }

        while (leftChangeChance === -1) {
            const char = s[windowStart]

            windowStart++

            // 更新窗口信息
            charMap[char] === 1 ? delete charMap[char] : charMap[char]--
            leftChangeChance = k - (windowEnd - windowStart - findBiggestCharCount(charMap))
        }
    }
    return maxLength === Number.MIN_SAFE_INTEGER ? s.length : maxLength
};

console.log(characterReplacement("AABABBA", 1))