/**
 * Given a string and a pattern, find the smallest substring in the given string which has all the characters of the given pattern.

Example 1:

Input: String="aabdec", Pattern="abc"
Output: "abdec"
Explanation: The smallest substring having all characters of the pattern is "abdec"
Example 2:

Input: String="abdabca", Pattern="abc"
Output: "abc"
Explanation: The smallest substring having all characters of the pattern is "abc".
Example 3:

Input: String="adcad", Pattern="abc"
Output: ""
Explanation: No substring in the given string has all characters of the pattern.
 */

const find_substring = function(str, pattern) {
    let windowStart = 0
    let windowEnd = 0
    let patternTable = {}
    let matched = 0
    let minStr = ''

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        if (!(char in patternTable)) {
            patternTable[char] = 0
        }
        patternTable[char] += 1
    }

    while (windowEnd < str.length) {
        const rightChar = str[windowEnd]
        windowEnd++

        if (rightChar in patternTable) {
            patternTable[rightChar]--
            if (patternTable[rightChar] === 0) {
                matched++
            }
        }

        while (matched === Object.keys(patternTable).length) {
            minStr = minStr 
            ? minStr.length > (windowEnd - windowStart)
                ? str.slice(windowStart, windowEnd)
                : minStr
            : str.slice(windowStart, windowEnd)

            let leftChar = str[windowStart]
            windowStart++

            if (leftChar in patternTable) {
                if (patternTable[leftChar] === 0) {
                    matched--
                }
                patternTable[leftChar]++
            }
        }
    }

    return minStr;
}

console.log(find_substring('abdabca', 'abc'))