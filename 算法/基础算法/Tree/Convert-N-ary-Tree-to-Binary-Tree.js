/**
 * Convert an N-ary tree to a Binary tree and then reconvert it to its original N-ary tree structure.
 */
import * as Tree from "./Implementation-of-BinaryTree.js";

// thinking: use left and right to record the child and sublings

let convertN_aryToBinary = function (node) {
    return convertN_aryToBinary_rec(node, 1)
};

let convertN_aryToBinary_rec = function (root, isLeft) {
    if (!root) {
        return;
    }

    let binaryNode = new Tree.BinaryTreeNode(root.data)
    let tempNode = binaryNode

    for (let child in root.children) {
        if (isLeft) {
            tempNode.left = convertN_aryToBinary_rec(child, 0)
            tempNode = tempNode.left
        } else {
            tempNode.right = convertN_aryToBinary_rec(child, 1)
            tempNode = tempNode.right;
        }
    }

    return binaryNode
};

let convertBinaryToN_ary = function (node) {
    return convertBinaryToN_aryRec(node, 1)
};

let convertBinaryToN_aryRec = function (node, isLeft) {
    if (!node) {
        return
    }

    let treeNode = new Tree.TreeNode(node.data)
    let tempNode = treeNode
    
    if (isLeft === 1) {
        while (tempNode.left) {
            let child = convertBinaryToN_aryRec(temp.left, 0)
            treeNode.children.push(child)
            tempNode = tempNode.left
        }
    } else {
        while (tempNode.right) {
            let child = convertBinaryToN_aryRec(temp.right, 1)
            treeNode.children.push(child)
            tempNode = tempNode.right
        }
    }
    
    return treeNode
};

let node1 = new Tree.TreeNode(1);
let node2 = new Tree.TreeNode(2);
let node3 = new Tree.TreeNode(3);
let node4 = new Tree.TreeNode(4);
node1.children.push(node2);
node1.children.push(node3);
node1.children.push(node4);
let node5 = new Tree.TreeNode(5);
let node6 = new Tree.TreeNode(6);
node3.children.push(node5);
node3.children.push(node6);
console.log("Original n-ary tree");
Tree.displayLevelOrder(node1);
let bnode1 = convertN_aryToBinary(node1);
console.log("Converted binary tree");
Tree.displayLevelOrder(bnode1);
let tnode1 = convertBinaryToN_ary(bnode1);
console.log("Converted n-ary tree");
Tree.displayLevelOrder(tnode1);