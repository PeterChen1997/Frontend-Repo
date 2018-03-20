// 写一个函数，求两个整数之和，要求在函数体内不得使用+、-、*、/四则运算符号


// js中 异或^ 与& 或|
// 思路：
function Add(num1, num2)
{
  let sum = 0
  let carry = 0
  do {
    // 加位：异或获得
    sum = num1 ^ num2
    // 进位：与运算×2
    carry = (num1 & num2) << 1
    num1 = sum
    num2 = carry
    // 循环直到没有进位
  } while(num2 !== 0)
  return sum
}