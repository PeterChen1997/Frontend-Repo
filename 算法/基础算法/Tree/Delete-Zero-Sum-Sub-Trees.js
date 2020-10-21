/**
 * Delete any subtrees whose nodes sum up to zero for a given binary tree.
 */
import * as Tree from "./Implementation-of-BinaryTree.js";

let deleteZeroSumSubtreeRec = function (root) {
    if (!root) {
        return 0
    }

    // left
    let leftVal = deleteZeroSumSubtreeRec(root.left)
    if (leftVal === 0) {
        root.left = null
    }

    // right
    let rightVal = deleteZeroSumSubtreeRec(root.right)
    if (rightVal === 0) {
        root.right === null
    }
    
    // mid
    return root.data + leftVal + rightVal

};

let deleteZeroSumSubtree = function (root) {
    if (root) {
        let sum = deleteZeroSumSubtreeRec(root)
        if (sum === 0) {
            root = null
        }
    }
};

let createTestTree = function () {
    let head = new Tree.BinaryTreeNode(7);
    let curr_head = head;

    let left = new Tree.BinaryTreeNode(5);
    let right = new Tree.BinaryTreeNode(6);
    curr_head.left = left;
    curr_head.right = right;

    curr_head = head.left;
    left = new Tree.BinaryTreeNode(-3);
    right = new Tree.BinaryTreeNode(-2);
    curr_head.left = left;
    curr_head.right = right;

    return head;
};

let root = createTestTree();
console.log("Level Order Traversal:");
Tree.displayLevelOrder(root);
deleteZeroSumSubtree(root);
console.log("Level Order Traversal:");
Tree.displayLevelOrder(root);