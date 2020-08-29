/**
 * Find the path with the maximum sum in a given binary tree. Write a function that returns the maximum sum. A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root.
 */

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

let globalMaxSum

const find_maximum_path_sum = function (root) {
    globalMaxSum = Number.MIN_SAFE_INTEGER
    find_maximum_sub_path_sum(root)
    return globalMaxSum
}

const find_maximum_sub_path_sum = function (root) {
    if (!root) {
        return 0
    }

    // notice nagative number
    let leftMaxSum = Math.max(find_maximum_sub_path_sum(root.left), 0)
    let rightMaxSum = Math.max(find_maximum_sub_path_sum(root.right), 0)

    let curMaxSum = leftMaxSum + rightMaxSum + root.value

    globalMaxSum = Math.max(globalMaxSum, curMaxSum)

    return Math.max(leftMaxSum, rightMaxSum) + root.value;
};



var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)

root = new TreeNode(-1)
root.left = new TreeNode(-3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`)
