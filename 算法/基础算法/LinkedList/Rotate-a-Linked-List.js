/**
 * Given the head node of a singly linked list and an integer 'n', rotate the linked list by 'n'.
 */

import LinkedList, {
    getLinkedListLen,
} from "./Implementation-of-Linked-List.js";

let rotateList = function (head, n) {
    if (!head || n === 0) {
        return head;
    }

    // get actual len
    const listLen = getLinkedListLen(head);
    n = n % listLen;
    if (n < 0) n = n + listLen;

    // get new header
    let newHeadPointer = head;
    let pre = null;
    let moveSteps = listLen - n;
    while (moveSteps > 0) {
        pre = newHeadPointer;
        newHeadPointer = newHeadPointer.next;
        moveSteps--;
    }

    // get tail
    let tailPointer = newHeadPointer;
    while (tailPointer.next) {
        tailPointer = tailPointer.next;
    }

    // rotate list
    pre.next = null;
    tailPointer.next = head;

    return newHeadPointer;
};

let listHead = LinkedList.createLinkedList([1, 2, 3, 4, 5]);
console.log("Original list:", LinkedList.display(listHead));

listHead = rotateList(listHead, 2);
console.log("List rotated by 2:", LinkedList.display(listHead));
