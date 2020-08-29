/**
 * Given a binary tree, return an array containing nodes in its right view. The right view of a binary tree is the set of nodes visible when the tree is seen from the right side.
 */


class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

const tree_right_view = function (root) {
    if (!root) {
        return []
    }

    const result = [];
    const queue = []
    queue.push(root)

    while (queue.length > 0) {
        const levelSize = queue.length
        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift()

            if (i === levelSize - 1) {
                result.push(currentNode.val)
            }
            
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
    }

    return result;
};


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
result = tree_right_view(root);
console.log(result)
// process.stdout.write('Tree right view: ');
// for (i = 0; i < result.length; i++) {
//   process.stdout.write(`${result[i].val} `);
// }