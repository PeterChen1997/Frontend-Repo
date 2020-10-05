/**
 * Given the head pointers of two linked lists where each linked list represents an integer number (each node is a digit), add them and return the resulting linked list.
 */

import LinkedList, { LinkedListNode } from "./Implementation-of-Linked-List.js";

let addIntegers = function (integer1, integer2) {
    if (!integer1 || !integer2) {
        return;
    }

    let resultLinkList = null;
    let carry = 0;
    let pointerOne = integer1;
    let pointerTwo = integer2;

    let sum,
        newNode,
        temp = resultLinkList;
    while (pointerTwo && pointerOne) {
        sum = carry + pointerTwo.data + pointerOne.data;
        carry = sum > 10 ? 1 : 0;

        newNode = new LinkedListNode(sum % 10);
        if (!resultLinkList) {
            resultLinkList = newNode;
            temp = newNode;
        } else {
            temp.next = newNode;
            temp = temp.next;
        }

        pointerOne = pointerOne.next;
        pointerTwo = pointerTwo.next;
    }

    // judge carry
    while (carry) {
        if (pointerOne) {
            sum = carry + pointerOne.data;
            carry = sum >= 10 ? 1 : 0;
            pointerOne = pointerOne.next;
        } else if (pointerTwo) {
            sum = carry + pointerTwo.data;
            carry = sum > 10 ? 1 : 0;
            pointerTwo = pointerTwo.next;
        } else {
            sum = carry;
            carry = 0;
        }

        newNode = new LinkedListNode(sum % 10);
        if (!resultLinkList) {
            resultLinkList = newNode;
            temp = newNode;
        } else {
            temp.next = newNode;
            temp = temp.next;
        }
    }

    return resultLinkList;
};

let first = LinkedList.createLinkedList([9, 9, 0, 1].reverse());
let second = LinkedList.createLinkedList([2, 3, 7].reverse());

console.log("First integer:", LinkedList.display(first));
console.log("Second integer:", LinkedList.display(second));

let result = addIntegers(first, second);
console.log("Result:", LinkedList.display(result));
