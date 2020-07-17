/**
n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:

输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。
 

提示：

皇后，是国际象棋中的棋子，意味着国王的妻子。皇后只做一件事，那就是“吃子”。当她遇见可以吃的棋子时，就迅速冲上去吃掉棋子。当然，她横、竖、斜都可走一到七步，可进可退。（引用自 百度百科 - 皇后 ）
 */

// 思路： 递归 回溯
// 难点是怎么用代码描述不能放置的位置
// 时间复杂度：时间复杂度：o(n!)
// 空间复杂度：o(n)

function genCheckerBoard(n) {
    let arr = new Array(n)
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n).fill('.')
    }
    return arr
}

/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
    if (n <= 0) {
        return
    } else if (n === 1) {
        return [['Q']]
    }

    // 结果数组
    const ansArr = []

    // 当前棋盘
    let board = genCheckerBoard(n)
    // 斜率 1 方向
    let line1 = new Array(2 * n - 1).fill(false)
    // 斜率 -1 方向
    let line2 = new Array(2 * n - 1).fill(false)
    // 当前列 方向
    let col = new Array(n).fill(false)

    function isValidPos(x, y, n) {
        return !col[x] && !line1[x - y + n - 1] && !line2[x + y]
    }

    function put(x, y, n) {
        // 放置棋子
        board[x][y] = 'Q'
        // 斜率1方向占住位置 (斜向线序号从0开始)
        line1[x - y + n - 1] = true
        // 斜率-1方向占住位置 (斜向线序号从0开始)
        line2[x + y] = true
        // 占住当前列
        col[x] = true
    }
    function remove(x, y, n) {
        // 同put
        board[x][y] = '.'
        line1[x - y + n - 1] = false
        line2[x + y] = false
        col[x] = false
    }

    function nQueen(n, y) {
        // 函数出口
        if (y === n) {
            ansArr.push(board.map(item => item.join('')))
            return
        }

        // 从第0列开始
        for (let x = 0; x < n; x++) {
            // 判断能不能放
            if (!isValidPos(x, y, n)) {
                continue
            }
            // 放置棋子
            put(x, y, n)
            // 迭代放置后的情况
            nQueen(n, y + 1)
            // 移除当前位置的棋子，从下一列重新开始
            remove(x, y, n)
        }
    }

    // 开始迭代
    nQueen(n, 0)

    return ansArr
};

console.log(solveNQueens(1))