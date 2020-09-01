/**
 * Given a number ‘n’, write a function to return the count of structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};


const count_trees = function (n) {
    if (n <= 1) {
        return 1
    }
    let count = 0
    for (let i = 1; i < n + 1; i++) {
        // i is the root
        const leftRes = count_trees(i - 1)
        const rightRes = count_trees(n - i)
        count += leftRes * rightRes
    }
    return count;
};


console.log(`Total trees: ${count_trees(2)}`)
console.log(`Total trees: ${count_trees(3)}`)
