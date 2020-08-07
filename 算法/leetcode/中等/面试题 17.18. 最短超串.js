/**
 * 假设你有两个数组，一个长一个短，短的元素均不相同。找到长数组中包含短数组所有的元素的最短子数组，其出现顺序无关紧要。

返回最短子数组的左端点和右端点，如有多个满足条件的子数组，返回左端点最小的一个。若不存在，返回空数组。

示例 1:

输入:
big = [7,5,9,0,2,1,3,5,7,9,1,1,5,8,8,9,7]
small = [1,5,9]
输出: [7,10]
示例 2:

输入:
big = [1,2,3]
small = [4]
输出: []
提示：

big.length <= 100000
1 <= small.length <= 100000
 */

/**
 * @param {number[]} big
 * @param {number[]} small
 * @return {number[]}
 */
var shortestSeq = function(big, small) {
    if (!big || !small || !(big.length) || !(small.length)) {
        return []
    }

    let windowStart = 0
    let windowEnd = 0
    let matched = 0
    let patternTable = {}
    let minWindowLength = Number.MAX_SAFE_INTEGER
    let resultArr = []

    for (let i = 0; i < small.length; i++) {
        const char = small[i]
        if (!(char in patternTable)) {
            patternTable[char] = 0
        }
        patternTable[char] += 1
    }

    while (windowEnd < big.length) {
        const rightChar = big[windowEnd]
        windowEnd++

        if (rightChar in patternTable) {
            patternTable[rightChar]--
            if (patternTable[rightChar] === 0) {
                matched++
            }
        }

        while (matched === Object.keys(patternTable).length) {
            if (windowEnd - windowStart < minWindowLength) {
                console.log( windowStart, windowEnd - 1)
                minWindowLength = windowEnd - windowStart
                resultArr = [windowStart, windowEnd - 1]
            }
            
            const leftChar = big[windowStart]
            windowStart++

            if (leftChar in patternTable) {
                if (patternTable[leftChar] === 0) {
                    matched--
                }
                patternTable[leftChar]++
            }
        }
    }
    return resultArr
};

// console.log(shortestSeq([7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7], [1, 5, 9]))
console.log(shortestSeq([1, 2, 1, 2], [1, 2]))