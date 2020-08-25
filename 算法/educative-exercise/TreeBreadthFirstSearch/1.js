/**
 * Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.
 */


class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }


    // tree traversal using 'next' pointer
    print_tree() {
        process.stdout.write("Traversal using 'next' pointer: ");
        let current = this;
        while (current !== null) {
            process.stdout.write(`${current.val} `);
            current = current.next;
        }
    }
}

const connect_all_siblings = function (root) {
    if (!root) {
        return root
    }

    // new queue
    const queue = []
    queue.push(root)

    let previousNode = null
    let currentNode = null
    while (queue.length > 0) {
        currentNode = queue.shift()

        if (previousNode) {
            previousNode.next = currentNode
        }
        previousNode = currentNode

        if (currentNode.left) {
            queue.push(currentNode.left)
        }
        if (currentNode.right) {
            queue.push(currentNode.right)
        }
    }
    return root
};


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_all_siblings(root);
root.print_tree();