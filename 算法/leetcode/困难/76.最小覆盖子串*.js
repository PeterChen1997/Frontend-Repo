/**
给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。

示例：

输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
说明：

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
    if (!s || !t || s.length < t.length) {
        return ""
    }

    // 目标字符串特征
    let need = {}
    for (let char of t) {
        need[char] ? need[char]++ : need[char] = 1
    }

    // 窗口描述变量
    let windowStart = 0
    let windowEnd = 0
    let validCharCounter = 0 // 满足要求的字符数量
    let window = {}

    // 子串描述变量
    let result = ""
    
    while (windowEnd < s.length) {
        let char = s[windowEnd]

        // 右移窗口
        windowEnd++

        // 更新窗口内数据
        if (need[char]) {
            window[char] ? window[char]++ : window[char] = 1
            if (need[char] === window[char]) {
                validCharCounter++
            }
        }

        // 判断左侧窗口是否要收缩
        while (validCharCounter === Reflect.ownKeys(need).length) {
            // 更新最小覆盖子串
            if (!result || (windowEnd - windowStart) < result.length) {
                result = s.slice(windowStart, windowEnd)
            }
            // 移出窗口的字符
            const deletedChar = s[windowStart]
            windowStart++
            // 更新窗口内数据
            if (need[deletedChar]) {
                if (need[deletedChar] === window[deletedChar]) {
                    validCharCounter--
                }
                window[deletedChar] === 1 ? delete window[deletedChar] : window[deletedChar]--
            }   
        }
    }
    return result
};

console.log(minWindow("ab", "b"))