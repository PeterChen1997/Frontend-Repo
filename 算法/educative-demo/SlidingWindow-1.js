/**
 * Given a string and a pattern, find out if the string contains any permutation of the pattern.

Permutation is defined as the re-arranging of the characters of the string. For example, “abc” has the following six permutations:

abc
acb
bac
bca
cab
cba
If a string has ‘n’ distinct characters it will have n!n! permutations.

Example 1:

Input: String="oidbcaf", Pattern="abc"
Output: true
Explanation: The string contains "bca" which is a permutation of the given pattern.
Example 2:

Input: String="odicf", Pattern="dc"
Output: false
Explanation: No permutation of the pattern is present in the given string as a substring.
Example 3:

Input: String="bcdxabcdy", Pattern="bcdyabcdx"
Output: true
Explanation: Both the string and the pattern are a permutation of each other.
Example 4:

Input: String="aaacb", Pattern="abc"
Output: true
Explanation: The string contains "acb" which is a permutation of the given pattern.
 */

// 思路：用一个哈希表表示匹配字符数量，超过字符长度时收缩windowStart

const find_permutation = function(str, pattern) {
    let windowStart = 0
    let windowEnd = 0

    const patternTable = {}
    let matchedChar = 0

    // init hashtable
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]
        if (!(char in patternTable)) {
            patternTable[char] = 0
        }
        patternTable[char] += 1
    }

    while (windowEnd < str.length) {
        // expand window
        const rightChar = str[windowEnd]
        windowEnd++

        // refresh window data
        if (rightChar in patternTable) {
            patternTable[rightChar]--
            if (patternTable[rightChar] === 0) {
                matchedChar++
            }
        }

        // judge jumpout case
        if (matchedChar === Object.keys(patternTable).length) {
            return true
        }

        // narrow window
        if (windowEnd - windowStart + 1 > pattern.length) {
            const leftChar = str[windowStart]
            windowStart++

            if (leftChar in patternTable) {
                if (patternTable[leftChar] === 0) {
                    matchedChar--
                }
                patternTable[leftChar]++
            }
        }
    }
    return false;
};
  
console.log(find_permutation('aaacb', 'abc'))