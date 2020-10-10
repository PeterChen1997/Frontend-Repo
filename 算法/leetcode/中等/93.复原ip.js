/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

 

示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
示例 3：

输入：s = "1111"
输出：["1.1.1.1"]
示例 4：

输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
示例 5：

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

提示：

0 <= s.length <= 3000
s 仅由数字组成

 */

const tempArr = [];

function findAddressRec(str, leftPart, result) {
    // break
    if (str.length > leftPart * 3 || (!str.length && leftPart !== 0)) {
        return;
    }

    if (leftPart === 0 && str.length === 0) {
        result.push(tempArr.join("."));
        return;
    }

    // split
    for (let i = 0; i < Math.min(str.length, 3); i++) {
        let curPart = str.slice(0, i + 1);
        if (
            (curPart.length > 1 && curPart.startsWith("0")) ||
            !(curPart >= 0 && curPart <= 255)
        ) {
            continue;
        }
        tempArr.push(curPart);
        findAddressRec(str.slice(i + 1), leftPart - 1, result);
        tempArr.pop();
    }
    return;
}

var restoreIpAddresses = function (s) {
    if (!s || !s.length || s.length > 12) {
        return [];
    }

    let result = [];
    findAddressRec(s, 4, result);

    return result;
};

console.log(restoreIpAddresses("1111"));
