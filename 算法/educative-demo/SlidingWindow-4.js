/**
 * Words Concatenation (hard) #
Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

Example 1:

Input: String="catfoxcat", Words=["cat", "fox"]
Output: [0, 3]
Explanation: The two substring containing both the words are "catfox" & "foxcat".
Example 2:

Input: String="catcatfoxfox", Words=["cat", "fox"]
Output: [3]
Explanation: The only substring containing both the words is "catfox".
 */

// 单词的处理复杂一些，每次的处理单位变成了单词的长度

const find_word_concatenation = function(str, words) {
    if (!words.length) {
        return []
    }

    const result_indices = []

    let wordTable = {}
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        if (!(word in wordTable)) {
            wordTable[word] = 0
        }
        wordTable[word] += 1
    }

    const wordsCount = words.length
    const wordLen = words[0].length
    for (let i = 0; i < str.length - wordsCount * wordLen + 1; i++) {
        let wordTableTemp = Object.assign({}, wordTable)
        let wordSeen = 0
        for (let j = 0; j < wordsCount; j++) {
            const nextWord = str.slice(i + j * wordLen, i + (j + 1) * wordLen)
            if (nextWord in wordTableTemp) {
                wordTableTemp[nextWord]--
                if (wordTableTemp[nextWord] === 0) {
                    wordSeen++
                }
            } else if (wordSeen) {
                break
            }

            if (wordSeen === Object.keys(wordTableTemp).length) {
                result_indices.push(i)
            }
        }
        
    }

    return result_indices;
};
  
console.log(find_word_concatenation('catfoxcat', ["cat", "fox"]))