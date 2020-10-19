/**
 * Serialize a binary tree to a file and then deserialize it back to a tree so that the original and the deserialized trees are identical.
 */

// time: n
// space: logn

// use marker to mark the leave node
import * as Tree from "./Implementation-of-BinaryTree.js";

let MARKER = Number.MAX_VALUE;
let serialize = function (node, stream) {
    if (!node) {
        stream.push(MARKER)
        return
    }
    stream.push(node.data)
    serialize(node.left, stream);
    serialize(node.right, stream);
};

let deserialize = function (stream) {
    let nodeData = stream.shift()

    if (nodeData === MARKER) {
        return null
    }

    const node = new Tree.BinaryTreeNode(nodeData)
    node.left = deserialize(stream);
    node.right = deserialize(stream)

    return node
};

var arr = [100, 50, 200, 25, 75, 125, 350];
let root = Tree.createBST(arr);
Tree.displayLevelOrder(root);
let p = [];
serialize(root, p);
let root_deserialized = deserialize(p);
Tree.displayLevelOrder(root_deserialized);