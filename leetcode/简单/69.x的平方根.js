/**
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。

 */

// 首遍思路： while循环
// 较好思路1： 用数学函数换算 x^(1/2) = e^(1/2 * lnx)
// 时间复杂度：o(1)
// 空间复杂度：o(1)

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt1 = (x) => {
    let counter = 0
    let temp = 0
    while (temp <= x) {
        counter += 1
        temp = counter * counter
    }
    return counter - 1
};

const mySqrt = (x) => {
    if (x === 0) {
        return 0
    }

    let ans = parseInt(Math.exp(0.5 * Math.log(x)))
    if ((ans + 1) * (ans + 1) <= x) {
        return ans + 1
    }
    return ans
}

console.log(mySqrt(4))