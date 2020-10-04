/**
 * Given the head of a singly linked list and 'N', swap the head with the Nth node. Return the head of the new linked list.
 */

import LinkedList from "./Implementation-of-Linked-List.js";

let swapNthNode = function (head, n) {
    if (!head || n <= 1) {
        return head;
    }

    let temp = head.next;
    let pre = null;
    let current = head;

    while (current && n > 1) {
        pre = current;
        current = current.next;
        n--;
    }

    if (!current) {
        return head;
    }

    pre.next = head;
    head.next = current.next;
    current.next = temp;

    return current;
};

let listHead = LinkedList.createLinkedList([7, 14, 21, 28, 35, 42]);
console.log("Original list:", LinkedList.display(listHead));

listHead = swapNthNode(listHead, 4);
console.log("Swapping 4th node with head:", LinkedList.display(listHead));
