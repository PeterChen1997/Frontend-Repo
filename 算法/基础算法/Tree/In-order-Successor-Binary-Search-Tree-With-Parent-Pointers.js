/**
 * 在结点拥有父节点的情况下，查找BST遍历的下一个节点
 */

import * as Tree from "./Implementation-of-BinaryTree.js";

let findMinInTree = function (root) {
    if (!root) {
        return null
    }
    
    while (root.left) {
        root = root.left
    }

    return root
};

let inorderSuccessorBstParentPointer = function (node) {
    if (node.right) {
        return findMinInTree(node.right)
    }

    while (node.parent) {
        if (node.parent.left === node) {
            return node.parent
        } 
        
        node = node.parent // 注意 如果不是left直接网上查找即可
    }
};

let findSuccessor = function (root, d) {
    if (!root) {
        return null
    }

    while (root) {
        if (root.data > d) {
            root = root.left
        } else if (root.data < d) {
            root = root.right
        } else {
            return inorderSuccessorBstParentPointer(root)
        }
    }
};

var arr = [100, 50, 200, 25, 75, 125, 350];
let root = Tree.createBST(arr);
Tree.populate_parents(root);
let allData = Tree.bstToList(root);
let allData_copy = allData.slice();
let output = "";
for (let d in allData_copy) {
    let successor = findSuccessor(root, allData_copy[d]);
    let i = allData.indexOf(allData_copy[d]);
    let expected_val = null;
    if (i < allData.length - 1) {
        expected_val = allData[i + 1];
    }
    if (successor) {
        output += "(" + allData_copy[d] + ", " + successor.data + ") ";
    } else {
        output += "(" + allData_copy[d] + ", Null) ";
    }
}
console.log(output);