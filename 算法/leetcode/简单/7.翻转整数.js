/*
  给定一个 32 位有符号整数，将整数中的数字进行反转。

  示例 1:

  输入: 123
  输出: 321
  示例 2:

  输入: -123
  输出: -321
  示例 3:

  输入: 120
  输出: 21
  注意:

  假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。根据这个假设，如果反转后的整数溢出，则返回 0。
*/

// 首遍思路： 考虑符号、考虑溢出、移除首位0
// 时间复杂度：o(n)

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
    
  let reversedNumStr = x.toString().split('').reverse().join('')
  let resultNum = 0
  let range = Math.pow(2, 31)

  // 判断是否为负数
  if (reversedNumStr.endsWith('-')) {
    resultNum = Number(-reversedNumStr.slice(0, reversedNumStr.length - 1))
  } else {
    resultNum = Number(reversedNumStr)
  }

  // 判断是否溢出
  if (resultNum < range - 1 && resultNum > -range) {
    return resultNum
  } else {
    return 0
  }

}

console.log(reverse(1230))