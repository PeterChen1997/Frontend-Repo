/**
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true
 */

// 首遍思路： 使用map进行符号计数，使用变量保存上一个符号类型，结果没法实现，还是得用栈
// 较好思路： 使用栈把 inputStr 管理起来，pop / push 管理
// 时间复杂度：o(n)

/**
 * @param {string} s
 * @return {boolean}
 */

const SIGN_MAP = {
    ')': '(',
    ']': '[',
    '}': '{',
}
const STACK_IS_EMPTY = '#'

const isValid = (inputStr) => {
    const inputArr = inputStr.split('')
    const signStack = []

    for (let i = 0; i < inputArr.length; i++) {
        const curItem = inputArr[i]

        // 判断是否为结束类型符号
        if (SIGN_MAP[curItem]) {
            const preItem = signStack.pop()
            if (SIGN_MAP[curItem] !== preItem) {
                return false
            }
        } else {
            signStack.push(curItem)
        }
    }
    return !signStack.length
};

console.log(isValid("{[]}"))