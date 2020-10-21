/**
 * Given the root node of a binary tree, swap the 'left' and 'right' children for each node.
 */

import * as Tree from "./Implementation-of-BinaryTree.js";

// post-order reversal
let mirrorTree = function (root) {
    if (!root) {
        return root
    }

    // left
    if (root.left) {
        mirrorTree(root.left)
    }

    // right
    if (root.right) {
        mirrorTree(root.right)
    }
g
    // current
    let temp = root.left
    root.left = root.right
    root.right = temp
};

let root = new Tree.BinaryTreeNode(20);

Tree.insert(root, 50);
Tree.insert(root, 200);
Tree.insert(root, 75);
Tree.insert(root, 25);
Tree.insert(root, 300);
Tree.displayLevelOrder(root);
mirrorTree(root);
console.log("Mirrored Tree:");
Tree.displayLevelOrder(root);