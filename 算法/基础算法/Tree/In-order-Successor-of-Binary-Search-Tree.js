/**
 * 找到BST节点的下一个节点
 */

import * as Tree from "./Implementation-of-BinaryTree.js";

let findMin = function (root) {
    if (!root) {
        return null
    }

    while (root.left) {
        root = root.left
    }

    return root.data
};

// d has child
    // find right min node
    // record the successor in left
// d not have child
    // left: find node in stack
    // right: null
let inorderSuccessorBST = function (root, d) {
    if (!root) {
        return
    }

    let successor = null
    while (root) {
        if (root.data > d) {
            successor = root; // 注意 只有往左遍历的时候需要记录
            root = root.left 
        } else if (root.data < d) {
            root = root.right
        } else {
            if (root.right) {
                return findMin(root.right);
            }
            break
        }
    }

    return successor.data
};

var arr = [25, 125, 200, 350, 50, 75, 100];
let root = Tree.createBST(arr);
let allData = Tree.bstToList(root);
let allDataCopy = allData.slice();

console.log(inorderSuccessorBST(root, 100))

// let output = "";
// for (let d in allDataCopy) {
//     let successor = inorderSuccessorBST(root, allDataCopy[d]);

//     if (successor) {
//         output += "(" + allDataCopy[d] + ", " + successor + ") ";
//     } else {
//         output += "(" + allDataCopy[d] + ", null) ";
//     }
// }
// console.log(output);