/**
 * This lesson contains a challenge and its solution for finding the perimeter of a tree.
 */
import * as Tree from "./Implementation-of-BinaryTree.js";

let printLeftPerimeter = function (root, result) {
    while (root) {
        let temp = root.data;

        if (root.left) {
            root = root.left
        } else if (root.right) {
            root = root.right
        } else {
            break
        }

        result.push(temp);
    }
};

let printRightPerimeter = function (root, result) {
    let stack = []
    while (root) {
        let temp = root.data;
        if (root.right) {
            root = root.right
        } else if (root.left) {
            root = root.left
        } else {
            break
        }

        stack.push(temp);
    }    

    stack.reverse().forEach(item => result.push(item))
};

let printLeafNodes = function (root, result) {
    if (root) {
        printLeafNodes(root.left, result)
        if (!root.left && !root.right) {
            result.push(root.data)
        }
        printLeafNodes(root.right, result);
    }
};

// print left
// print leaf
// pring right
let displayTreePerimeter = function (root) {
    let result = []
    if (root) {
        result.push(root.data);
        printLeftPerimeter(root.left, result)

        if (root.left || root.right) {
            printLeafNodes(root, result)
        }

        printRightPerimeter(root.right, result)
    }
    return result
};

var arr = [100, 50, 200, 25, 60, 350, 10, 70, 400];
let root = Tree.createBST(arr);
console.log("Print tree perimeter");
console.log(displayTreePerimeter(root));