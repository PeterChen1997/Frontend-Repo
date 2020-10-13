/**
 * Given a binary tree, convert it to a doubly linked list so that the order of the doubly linked list is the same as an in-order traversal of the binary tree.
 */
import * as Tree from "./Implementation-of-BinaryTree.js";

let concatenateLists = function (head1, head2) {
    if (!head1) {
        return head2
    }
    if (!head2) {
        return head1
    }

    let tail1 = head1.left;
    let tail2 = head2.left;

    tail1.right = head2;
    head2.left = tail1;

    head1.left = tail2;
    tail2.right = head1;

    return head1
};

let convertToLinkedListRec = function (root) {
    if (!root) {
        return null
    }

    let leftPart = convertToLinkedListRec(root.left);
    let rightPart = convertToLinkedListRec(root.right);

    root.left = root.right = root

    let result = concatenateLists(leftPart, root);
    result = concatenateLists(result, rightPart)

    return result
};

let convertToLinkedList = function (root) {
    if (!root) {
        return
    }
    
    let head = convertToLinkedListRec(root)
    if (head.left !== null) {
        head.left.right = null;
        head.left = null;
    }

    return head
};

let getList = function (head) {
    let r = [];
    if (!head) {
        return r;
    }

    let temp = head;
    while (true) {
        r.push(temp.data);
        temp = temp.right;
        if (temp == null) {
            break;
        }
    }
    return r;
};

const data = [100, 50, 200, 25, 75, 125, 300];
let root = Tree.createBST(data);
let all_data = Tree.bstToList(root);
let head = convertToLinkedList(root);
let v = getList(head);
console.log(v);
