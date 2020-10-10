/**
 * Given the roots of two binary trees, determine if these trees are identical or not.
 */
import * as Tree from "./Implementation-of-BinaryTree.js";

let areIdentical = function (root1, root2) {
    if (!root1 && !root2) {
        return true;
    }

    if (root1 && root2) {
        return (
            root1.data === root2.data &&
            areIdentical(root1.left, root2.left) &&
            areIdentical(root1.right, root2.right)
        );
    }

    return false;
};

let root1 = new Tree.BinaryTreeNode(100);

Tree.insert(root1, 50);
Tree.insert(root1, 200);
Tree.insert(root1, 25);
Tree.insert(root1, 125);
Tree.insert(root1, 350);

Tree.displayLevelOrder(root1);
let root2 = Tree.createRandomBST(14);
Tree.displayLevelOrder(root2);

if (areIdentical(root1, root2)) {
    console.log("The trees are identical");
} else {
    console.log("The trees are not identical");
}
