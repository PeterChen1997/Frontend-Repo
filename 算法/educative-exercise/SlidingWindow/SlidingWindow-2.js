/**
 * Given a string and a pattern, find all anagrams of the pattern in the given string.

Anagram is actually a Permutation of a string. For example, “abc” has the following six anagrams:

abc
acb
bac
bca
cab
cba
Write a function to return a list of starting indices of the anagrams of the pattern in the given string.

Example 1:

Input: String="ppqp", Pattern="pq"
Output: [1, 2]
Explanation: The two anagrams of the pattern in the given string are "pq" and "qp".
Example 2:

Input: String="abbcabc", Pattern="abc"
Output: [2, 3, 4]
Explanation: The three anagrams of the pattern in the given string are "bca", "cab", and "abc".
 */

const find_string_anagrams = function(str, pattern) {
    let windowStart = 0
    let windowEnd = 0

    const patternTable = {}
    const resultIndex = []
    let matched = 0

    for (let i = 0; i < pattern.length; i++) {
        let char = pattern[i]
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
            resultIndex.push(windowEnd - 1)
            if (patternTable[rightChar] === 0) {
                matched++
            }
        }

        if (matched === Object.keys(patternTable).length) {
            console.log('break')
            break
        }

        if (windowEnd - windowStart + 1 > pattern.length) {
            let leftChar = pattern[windowStart]
            windowStart++
            if (leftChar in patternTable) {
                if (patternTable[leftChar] === 0) {
                    matched--
                }
                patternTable[leftChar]++
                resultIndex.shift()
            }
        }
    }

    return resultIndex;
  };
  
  console.log(find_string_anagrams('abbcabc', 'abc'))