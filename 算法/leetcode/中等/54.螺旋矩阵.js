/**
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]

 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || !matrix.length) {
        return []
    }

    let width = matrix[0].length
    let height = matrix.length

    let x = 0
    let y = 0
    while (x < width && y < height) {
        // first line - 不包括最后一个元素
        for (let i = 0; i < width - 1; i++) {
            result.push(matrix[i][y])
        }
        // last row
        for (let j = 0; i < height - 1; j++) {
            result.push(matrix[][])
        }

    }
};

console.log(
    spiralOrder([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ])
);