/**
 * Given a number ‘n’, write a function to return all structurally unique Binary Search Trees (BST) that can store values 1 to ‘n’?
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findUnique_trees_recursive(start, end) {
    const result = []

    // return left / right child
    if (start > end) {
        result.push(null)
        return result
    }

    for (let i = start; i < end + 1; i++) {
        // i is the root
        const leftChildTree = findUnique_trees_recursive(start, i - 1)
        const rightChildTree = findUnique_trees_recursive(i + 1, end)

        // loop for all result
        for (let i = 0; i < leftChildTree.length; i++) {
            for (let j = 0; j < rightChildTree.length; j++) {
                const root = new TreeNode(i, leftChildTree[i], rightChildTree[j])
                result.push(root)
            }
        }
    }

    return result
}

const find_unique_trees = function (n) {
    if (n <= 0) {
        return []
    }
    return findUnique_trees_recursive(1, n);
};


console.log(`Total trees: ${find_unique_trees(2)}`)
console.log(`Total trees: ${find_unique_trees(3)}`)
