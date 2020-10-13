/**
 * Given a binary tree, figure out whether it's a BST.
 */

// method1: build recursive call, check value is in min,max or not
import * as Tree from "./Implementation-of-BinaryTree.js";

function isBST(root) {
    function isBSTRec(root, minVal, maxVal) {
        if (!root) {
            return true
        }

        if (root.data > minVal && root.data < maxVal) {
            return isBSTRec(root.left, minVal, root.data) && isBSTRec(root.right, root.data, maxVal)
        }
        return false
    }

    return isBSTRec(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
}

// method2: dfs 遍历判断是否后者大于前者

function isBST2(root) {
    function DFSRec(root, result) {
        if (root.left) {
            DFSRec(root.left, result)
        }

        result.push(root.data)

        if (root.right) {
            DFSRec(root.right, result)
        }

        return result
    }

    if (!root) {
        return null
    }

    const result = DFSRec(root, [])

    return result.every((element, index, arr) => {
        if (index < arr.length - 1) {
            return element < arr[index + 1]
        }
        return true
    })
}

let root = new Tree.BinaryTreeNode(100);
Tree.insert(root, 50);
Tree.insert(root, 200);
Tree.insert(root, 25);
// Add a node at an incorrect position
Tree.insert(root, 150);
Tree.insert(root, 350);
console.log(Tree.getInorder(root));

console.log(isBST2(root))
// output == true ? console.log("True") : console.log("False");