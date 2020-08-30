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


const find_unique_trees = function (n) {
    result = [];
    // TODO: Write your code here
    return result;
};


console.log(`Total trees: ${find_unique_trees(2)}`)
console.log(`Total trees: ${find_unique_trees(3)}`)
