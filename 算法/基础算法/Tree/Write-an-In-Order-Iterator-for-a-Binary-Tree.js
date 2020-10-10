/**
 * Implement a class that implements an in-order iterator on a Binary Tree.
 */

import * as Tree from "./Implementation-of-BinaryTree.js";

class InorderIterator {
    constructor(root) {
        this.stack = [];
        this.populateIterator(root);
    }

    populateIterator(root) {
        while (root) {
            this.stack.push(root);
            root = root.left;
        }
    }

    hasNext() {
        if (!this.stack || this.stack.length === 0) {
            return false;
        } else {
            return true;
        }
    }
    // getNext returns null if there are no more elements in tree
    getNext() {
        if (!this.hasNext()) {
            return null;
        }

        let val = this.stack.pop();

        this.populateIterator(val.right);

        return val;
    }
}

let inorderUsingIterator = function (root) {
    let iter = new InorderIterator(root);
    let result_str = "";
    while (iter.hasNext()) {
        let ptr = iter.getNext();
        result_str += ptr.data + " ";
    }
    return result_str;
};

let root = Tree.insert(null, 100);
Tree.insert(root, 50);
Tree.insert(root, 200);
Tree.insert(root, 25);
Tree.insert(root, 75);
Tree.insert(root, 125);
Tree.insert(root, 300);
Tree.insert(root, 12);
Tree.insert(root, 35);
Tree.insert(root, 60);
console.log("Inorder Iterator = " + inorderUsingIterator(root));
