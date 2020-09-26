/**
 * There is a dictionary containing words from an alien language for which we don’t know the ordering of the alphabets. Write a method to find the correct order of the alphabets in the alien language. It is given that the input is a valid dictionary and there exists an ordering among its alphabets.

Example 1:

Input: Words: ["ba", "bc", "ac", "cab"]
Output: bac
Explanation: Given that the words are sorted lexicographically by the rules of the alien language, so
from the given words we can conclude the following ordering among its characters:
 
1. From "ba" and "bc", we can conclude that 'a' comes before 'c'.
2. From "bc" and "ac", we can conclude that 'b' comes before 'a'
 
From the above two points, we can conclude that the correct character order is: "bac"
Example 2:

Input: Words: ["cab", "aaa", "aab"]
Output: cab
Explanation: From the given words we can conclude the following ordering among its characters:
 
1. From "cab" and "aaa", we can conclude that 'c' comes before 'a'.
2. From "aaa" and "aab", we can conclude that 'a' comes before 'b'
 
From the above two points, we can conclude that the correct character order is: "cab"
Example 3:

Input: Words: ["ywx", "wz", "xww", "xz", "zyy", "zwz"]
Output: ywxz
Explanation: From the given words we can conclude the following ordering among its characters:
 
1. From "ywx" and "wz", we can conclude that 'y' comes before 'w'.
2. From "wz" and "xww", we can conclude that 'w' comes before 'x'.
3. From "xww" and "xz", we can conclude that 'w' comes before 'z'
4. From "xz" and "zyy", we can conclude that 'x' comes before 'z'
5. From "zyy" and "zwz", we can conclude that 'y' comes before 'w'
 
From the above five points, we can conclude that the correct character order is: "ywxz"
 */

function find_order(words) {
    if (!words || !words.length) {
        return ''
    }

    const inDegree = {}
    const graph = {}

    // init graph
    words.forEach(word => {
        for (let i = 0; i < word.length; i++) {
            const char = word[i]
            inDegree[char] = 0
            graph[char] = []
        }
    })

    // build graph
    for (let i = 0; i < words.length - 1; i++) {
        const preWord = words[i]
        const nextWord = words[i + 1]
        for (let j = 0; j < Math.min(preWord.length, nextWord.length); j++) {
            const preChar = preWord[j]
            const nextChar = nextWord[j]
            if (preChar !== nextChar) {
                inDegree[nextChar]++
                graph[preChar].push(nextChar)
                break
            }
        }
    }

    // find all resources
    const sources = []
    Reflect.ownKeys(inDegree).forEach(key => {
        if (inDegree[key] === 0) {
            sources.push(key)
        }
    })

    const sortedOrder = []
    while (sources.length > 0) {
        const curKey = sources.shift()
        sortedOrder.push(curKey)

        // remove alias
        graph[curKey].forEach(child => {
            inDegree[child]--
            if (inDegree[child] === 0) {
                sources.push(child)
            }
        })
    }

    // judge if is a circle
    if (sortedOrder.length !== Reflect.ownKeys(inDegree).length) {
        return "";
    }

    return sortedOrder.join('');
};

console.log(`Character order: ${find_order(["ba", "bc", "ac", "cab"])}`);
console.log(`Character order: ${find_order(["cab", "aaa", "aab"])}`);
console.log(
    `Character order: ${find_order(["ywx", "wz", "xww", "xz", "zyy", "zwz"])}`
);
