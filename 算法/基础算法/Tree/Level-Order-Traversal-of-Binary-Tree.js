/**
 * Given the root of a binary tree, display the node values at each level.
 */

import * as Tree from "./Implementation-of-BinaryTree.js";

let levelOrderTraversal = function (root) {
    if (!root) {
        console.log('[]')
        return
    }

    const stack = [root, null]
    for (let i = 0; i < stack.length; i++) {
        let temp = stack[i]

        if (temp === null && stack[i - 1] !== null) {
            stack.push(null);
            continue;
        } else if (temp === null && stack[i - 1] === null) {
            break
        }

        if (temp.left) {
            stack.push(temp.left);
        }
        if (temp.right) {
            stack.push(temp.right);
        }
    }

    console.log(stack.map(a => a ? a.data : '\n').join())
};

var arr = [100, 50, 200, 25, 75, 350];
let root = Tree.createBST(arr);
console.log("\nLevel Order Traversal:");
levelOrderTraversal(root);