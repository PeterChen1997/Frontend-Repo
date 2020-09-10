/**
 * Given a binary matrix representing an image, we want to flip the image horizontally, then invert it.

To flip an image horizontally means that each row of the image is reversed. For example, flipping [0, 1, 1] horizontally results in [1, 1, 0].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [1, 1, 0] results in [0, 0, 1].
 */

function flip_and_invert_image(matrix) {
    if (!matrix || !matrix.length) {
        return []
    }

    const len = matrix.length
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < Math.floor((len + 1) / 2); j++) {
            var tmp = matrix[i][j] ^ 1;
            matrix[i][j] = matrix[i][len - 1 - j] ^ 1;
            matrix[i][len - 1 - j] = tmp;
        }
    }

    return matrix
}

console.log(flip_and_invert_image([[1, 0, 1], [1, 1, 1], [0, 1, 1]]))
console.log(flip_and_invert_image([[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]))