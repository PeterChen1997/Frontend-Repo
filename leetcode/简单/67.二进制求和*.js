/**
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

 

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 

提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。
 */

// 耗时： 1h

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    // 先对齐
    while (a.length > b.length) b = '0' + b
    while (a.length < b.length) a = '0' + a

    let resArr = []
    let carry = 0

    for (let i = a.length - 1; i >= 0; i--) {
        let curRes = a[i] ^ b[i]
        let plusCounter = parseInt(a[i]) && parseInt(b[i])

        if (carry) {
            if (curRes) {
                curRes = 0
                plusCounter = 1
            } else {
                // 这里注意不要把进位丢了
                curRes = 1
            }
        }

        carry = plusCounter
        resArr[i] = curRes
    }

    if (carry) {
        resArr.unshift('1')
    }
    return resArr.join('')
};

console.log(addBinary('11', '1'))