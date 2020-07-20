/*
  判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

  示例 1:

  输入: 121
  输出: true
  示例 2:

  输入: -121
  输出: false
  解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
  示例 3:

  输入: 10
  输出: false
  解释: 从右向左读, 为 01 。因此它不是一个回文数。
  进阶:

  你能不将整数转为字符串来解决这个问题吗？
*/

// 首遍思路： 两个指针，首位对比
// 进阶思路：
// 较好思路： 
// 时间复杂度：o(n)

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  let numArr = x.toString().split('')
  let numArrLength = numArr.length

  let pointerOne
  for (let pointerTwo = 0; pointerTwo < numArrLength; pointerTwo++) {
    pointerOne = numArrLength - pointerTwo - 1
    if (numArr[pointerOne] === numArr[pointerTwo]) {
      continue
    } else {
      return false
    }
  }

  return true
}

console.log(isPalindrome(123211))