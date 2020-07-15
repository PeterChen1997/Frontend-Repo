/**
给定一个字符串数组 arr，字符串 s 是将 arr 某一子序列字符串连接所得的字符串，如果 s 中的每一个字符都只出现过一次，那么它就是一个可行解。

请返回所有可行解 s 中最长长度。

 

示例 1：

输入：arr = ["un","iq","ue"]
输出：4
解释：所有可能的串联组合是 "","un","iq","ue","uniq" 和 "ique"，最大长度为 4。
示例 2：

输入：arr = ["cha","r","act","ers"]
输出：6
解释：可能的解答有 "chaers" 和 "acters"。
示例 3：

输入：arr = ["abcdefghijklmnopqrstuvwxyz"]
输出：26
 

提示：

1 <= arr.length <= 16
1 <= arr[i].length <= 26
arr[i] 中只含有小写英文字母
 */

// 思路： 
// 使用 32 位 int 来表示二进制的 26个 英文字母用于判断是否重复
// 使用Depth First Search进行搜索
// 时间复杂度：o(2^n)
// 空间复杂度：o(n)

/**
 * @param {string[]} arr
 * @return {number}
 */
function isUnique() {

}

const maxLength = (arr) => {
    let resArr = []

    // 注意，这里要过滤掉自身重复的情况
    arr = arr.filter(item => item.length === new Set(item.split('')).size)
    
    // 遍历每一项的每一个字母
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        for (let j = 0; j < item.length; j++) {

        }
    }


    // 取出最大值
    return resArr.reduce()
};

console.log(maxLength(["un","iq","ue"]))


// class Solution:
//     def maxLength(self, arr: List[str]) -> int:
//         arr = [x for x in arr if len(x) == len(set(x))]
        
//         def codec(str):
//             res = 0
//             for c in str:
//                 res = res|(1<<(ord(c)-ord('a')))
//             return (res,len(str))
        
//         dp = [(0,0)]
//         for x in arr:
//             mask,l = codec(x)
//             for m,c in dp:
//                 if not mask&m:
//                     dp.append((mask|m,l+c))
        
//         return max(l for m,l in dp)
            
// class Solution:
// def maxLength(self, arr: List[str]) -> int:
//     res = [[]]
    
//     for e in arr:
//         if len(set(list(e))) < len(e): #自身有重复
//             continue
//         lens = len(res)
//         for i in range(lens):

//             if not set(list(''.join(res[i])))&set(list(e)): #添加且与之前的不重复
//                 res.append(res[i] + [e])
//     return max([len(''.join(i)) for i in res]) #选出最长
