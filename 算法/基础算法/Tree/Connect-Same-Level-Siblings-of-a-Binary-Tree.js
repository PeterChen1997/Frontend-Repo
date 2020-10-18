/**
 * Given a binary tree, connect its siblings at each level.
 */
import * as Tree from "./Implementation-of-BinaryTree.js";

let connectNextLevel = function(head) {
    let cur = head
    let nextLevelHead = null
    let pre = null

    while (cur) {
        if (cur.left && cur.right) {
            if (!nextLevelHead) {
                nextLevelHead = cur.left
            }

            cur.left.next = cur.right

            if (pre) {
                pre.next = cur.left
            }
            pre = cur.right
        } else if (cur.left) {
            if (!nextLevelHead) {
                nextLevelHead = cur.left
            }
            if (pre) {
                pre.next = cur.left
            }

            pre = cur.left
        } else if (cur.right) {
            if (!nextLevelHead) {
                nextLevelHead = cur.right;
            }
            if (pre) {
                pre.next = cur.right;
            }

            pre = cur.right;
        }
        cur = cur.next
    }

    if (pre) {
        pre.next = null
    }

    return nextLevelHead
};

let populateSiblingPointers = function (root) {
    if (!root) {
        return
    }

    root.next = null

    while (root) {
        root = connectNextLevel(root)
    }
};

let v = [100,50,200,25,75,300,10,350,15]
let root = Tree.createBST(v);
console.log(v);
populateSiblingPointers(root);
console.log(root.left.next.data) // 200
console.log(root.left.right.next.data) // 300