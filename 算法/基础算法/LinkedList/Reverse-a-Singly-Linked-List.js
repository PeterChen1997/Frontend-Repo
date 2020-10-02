/**
 * Reverse the singly linked list and return the pointer/reference to the head of the reversed linked list.
 */
import LinkedList from "./Implementation-of-Linked-List.js";

// method1: iterate
// time: n
// space: 1
let reverse = function (head) {
    if (!head) {
        return head;
    }

    let pre = null;
    let next = null;
    let now = head;
    while (now) {
        next = now.next;
        now.next = pre;
        pre = now;
        now = next;
    }

    return pre;
};

// method2: recursive
// time: n
// space: n
let reverse2 = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let reversedHead = reverse2(head.next);

    head.next.next = head;
    head.next = null;

    return;
};

let head_reverse = LinkedList.createLinkedList([7, 14, 21, 28]);
console.log("Original:", LinkedList.display(head_reverse));

head_reverse = reverse(head_reverse);
console.log("After Reverse:", LinkedList.display(head_reverse));
