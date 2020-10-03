/**
 * Given a singly linked list, return the nth from last node. Return null if 'n' is out-of-bounds.
 */

import LinkedList, {
    getLinkedListLen,
} from "./Implementation-of-Linked-List.js";

let findNthFromLast = function (head, n) {
    if (!head || n < 0) {
        return null;
    }

    if (getLinkedListLen(head) < n) {
        return null;
    }

    let pointerOne = head;
    let pointerTwo = head;

    while (n > 0) {
        pointerTwo = pointerTwo.next;
        n--;
    }

    while (pointerTwo) {
        pointerTwo = pointerTwo.next;
        pointerOne = pointerOne.next;
    }

    return pointerOne.data;
};

let head = LinkedList.createLinkedList([7, 14, 21, 28, 35, 42]);
console.log("List:", LinkedList.display(head));

console.log("3rd element from last:", findNthFromLast(head, 3));
