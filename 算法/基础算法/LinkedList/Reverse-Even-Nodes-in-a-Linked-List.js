/**
 * Given a singly linked list, reverse the nodes at even indices.
 */

import LinkedList from "./Implementation-of-Linked-List.js";

let mergeAlternating = function (list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    let resultPointer = list1;
    let tempPointer = null;

    while (list1 && list2) {
        // insert odd node
        if (tempPointer) {
            tempPointer.next = list1;
            tempPointer = tempPointer.next;
        } else {
            tempPointer = list1;
        }
        list1 = list1.next;

        // insert even node
        tempPointer.next = list2;
        tempPointer = tempPointer.next;
        list2 = list2.next;
    }

    if (list1) {
        tempPointer.next = list1;
    }

    return resultPointer;
};

let reverseEvenNodes = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let tempOdd = head;
    let tempEven = head.next;
    let headOdd = head;
    let headEven = null;
    // extract even node
    while (tempEven) {
        // remove even node
        tempOdd.next = tempOdd.next.next;

        // insert into even list
        tempEven.next = headEven;
        headEven = tempEven;

        // continue
        tempOdd = tempOdd.next;
        tempEven = tempOdd.next;
    }

    // merge node
    return mergeAlternating(headOdd, headEven);
};

let listHead = LinkedList.createLinkedList([7, 14, 21, 28, 9]);
console.log("Original list:", LinkedList.display(listHead));

listHead = reverseEvenNodes(listHead);
console.log("After reversing even nodes:", LinkedList.display(listHead));