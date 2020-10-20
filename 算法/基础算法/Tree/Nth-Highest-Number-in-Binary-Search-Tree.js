/**
 * Find the nth highest node in a Binary Search Tree(BST).
 */
import * as Tree from "./Implementation-of-BinaryTree.js";

// method1: reverse in-order traversal
let currentCount = 0;
let findNthHighestInBST1 = function (node, n) {
    if (!node) {
        return null
    }

    // right
    let result = findNthHighestInBST(node.right, n)
    if (result) {
        return result
    }

    // current
    currentCount++
    if (n === currentCount) {
        return node
    }

    // left
    result = findNthHighestInBST(node.left, n)
    if (result) {
        return result
    }

    return null
};

// method2: use count to find the interval
let findNthHighestInBST = function (node, n) {
    if (!node) {
        return null
    }

    let leftCount = 0
    if (node.left) {
        leftCount = node.left.count
    }

    let k = node.count - leftCount
    if (k === n) {
        return node
    } else if (k < n) {
        return findNthHighestInBST(node.left, n - k)
    } else {
        return findNthHighestInBST(node.right, n)
    }
}

let root = new Tree.BinaryTreeNode(100);
root.count = 7;
Tree.insert(root, 50);
let node12 = Tree.findInBST(root, 50);
node12.count = 3;
Tree.insert(root, 200);
let node3 = Tree.findInBST(root, 200);
node3.count = 3;
Tree.insert(root, 25);
let node4 = Tree.findInBST(root, 25);
node4.count = 1;
Tree.insert(root, 75);
let node8 = Tree.findInBST(root, 75);
node8.count = 1;
Tree.insert(root, 125);
let node18 = Tree.findInBST(root, 125);
node18.count = 1;
Tree.insert(root, 350);
let node16 = Tree.findInBST(root, 350);
node16.count = 1;

console.log("Level Order Traversal:");
Tree.displayLevelOrder(root);

let n = 2;
currentCount = 0;
let nth_highest_node = findNthHighestInBST(root, n);
console.log(nth_highest_node.data);

n = 1;
currentCount = 0;
nth_highest_node = findNthHighestInBST(root, n);
console.log(nth_highest_node.data);

n = 5;
currentCount = 0;
nth_highest_node = findNthHighestInBST(root, n);
console.log(nth_highest_node.data);

n = 30;
currentCount = 0;
nth_highest_node = findNthHighestInBST(root, n);
console.log(nth_highest_node);