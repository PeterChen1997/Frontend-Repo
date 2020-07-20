/**
将非负整数转换为其对应的英文表示。可以保证给定输入小于 231 - 1 。

示例 1:

输入: 123
输出: "One Hundred Twenty Three"
示例 2:

输入: 12345
输出: "Twelve Thousand Three Hundred Forty Five"
示例 3:

输入: 1234567
输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
示例 4:

输入: 1234567891
输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"

 */

/**
 * 思路：分析数字特征
 * 0～19
 * > 19 十
 * > 100 百
 * > 1,000 千
 * > 1,000,000 百万
 * > 1,000,000,000 十亿
 */

/**
 * @param {number} num
 * @return {string}
 */
const numberToWords = (num) => {
    function numParser(num) {
        let curResArr = []

        const hundred = Math.floor(num / 100)
        if (hundred) {
            curResArr.push(LESS_THAN_TWENTY[hundred], HUNDRED)
        }

        num %= 100
        if (num <= 19) {
            if (num) {
                curResArr.push(LESS_THAN_TWENTY[num])
            }
            return curResArr.join(' ')
        }
        
        const tenth = Math.floor(num / 10)
        curResArr.push(TENTH[tenth - 2])

        const digit = num % 10
        if (digit) {
            curResArr.push(LESS_THAN_TWENTY[digit])
        }

        return curResArr.join(' ')
    }

    if (!num) {
        return 'Zero'
    }

    const LESS_THAN_TWENTY = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    const TENTH = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    const HUNDRED = 'Hundred'
    const THOUSANDTH = ['Thousand', 'Million', 'Billion']
    let resArr = []

    for(let i = 0; num > 0; i++) {
        let curNum = num % 1000
        // 处理千位以上
        if (curNum && i) {
            resArr.push(`${THOUSANDTH[i - 1]}`)
        }
        // 处理千位以下
        if (curNum) {
            resArr.push(numParser(curNum))
        }
        // 继续往后循环
        num = Math.floor(num / 1000)
    }

    // 倒序join输出
    return resArr.reverse().join(' ')
};

console.log(numberToWords(1000000))