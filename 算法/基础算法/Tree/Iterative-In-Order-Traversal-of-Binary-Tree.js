/**
 * Write an in-order traversal of a binary tree iteratively.
 */
import * as Tree from "./Implementation-of-BinaryTree.js";

 let inorderIterative = function (root) {
     if (!root) {
         return
     }

     const stack = []
     const result = []

     // L M R
     while (root) {
         stack.push(root)
         root = root.left
     }

     while (stack.length > 0) {
        let temp = stack.pop()
        result.push(temp.data)
        
        if (temp.right) {
            result.push(temp.right.data)
        }
    }

     return result
 };

 var arr = [100, 50, 200, 25, 75, 35];
 let root = Tree.createBST(arr);
 console.log("Inorder Iterative Traversal= ", inorderIterative(root));