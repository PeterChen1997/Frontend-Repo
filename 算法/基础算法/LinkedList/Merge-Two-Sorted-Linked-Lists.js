/**
 * Given two sorted linked lists, merge them so that the resulting linked list is also sorted.
 */

import LinkedList from "./Implementation-of-Linked-List.js";

let mergeSorted = function (head1, head2) {
    if (!head1) {
        return head2;
    } else if (!head2) {
        return head1;
    }

    let resultPointer;
    if (head1.data < head2.data) {
        resultPointer = head1;
        head1 = head1.next;
    } else {
        resultPointer = head2;
        head2 = head2.next;
    }

    let tempPointer = resultPointer;
    while (head1 && head2) {
        if (head1.data < head2.data) {
            tempPointer.next = head1;
            head1 = head1.next;
        } else {
            tempPointer.next = head2;
            head2 = head2.next;
        }

        tempPointer = tempPointer.next;
    }

    // add the nodes left
    if (head1) {
        tempPointer.next = head1;
    } else if (head2) {
        tempPointer.next = head2;
    }

    return resultPointer;
};

let listHead1 = LinkedList.createLinkedList([4, 8, 15, 19, 22]);
let listHead2 = LinkedList.createLinkedList([7, 9, 10, 16]);

console.log("List 1:", LinkedList.display(listHead1));
console.log("List 2:", LinkedList.display(listHead2));

let merge = mergeSorted(listHead1, listHead2);
console.log("Merged:", LinkedList.display(merge));
