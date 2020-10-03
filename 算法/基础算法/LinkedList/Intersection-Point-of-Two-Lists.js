/**
 * Given the head nodes of two linked lists that may or may not intersect, find out if they intersect and return the point of intersection. Return null otherwise.
 */

// method1: N2遍历
// method2：配合哈希表 M + N
// mtdhos3：指针配合，移动到距离结束相同的距离

import LinkedList, {
    getLinkedListLen,
    LinkedListNode,
} from "./Implementation-of-Linked-List.js";

let intersect = function (head1, head2) {
    // get two linked list's len
    let lenOne = getLinkedListLen(head1);
    let lenTwo = getLinkedListLen(head2);

    // move pointer
    let pointerOne = head1;
    let pointerTwo = head2;
    if (lenOne > lenTwo) {
        while (lenOne - lenTwo > 0) {
            pointerOne = pointerOne.next;
            lenOne--;
        }
    } else {
        while (lenTwo - lenOne > 0) {
            pointerTwo = pointerTwo.next;
            lenTwo--;
        }
    }

    // loop
    while (lenOne > 0) {
        if (pointerOne === pointerTwo) {
            return pointerOne.data;
        }

        pointerOne = pointerOne.next;
        pointerTwo = pointerTwo.next;
    }

    return null;
};

let list_head_1 = LinkedList.createLinkedList([13, 4]);
let list_head_2 = LinkedList.createLinkedList([29, 23, 82, 11]);

let node1 = new LinkedListNode(12);
let node2 = new LinkedListNode(27);

list_head_1 = LinkedList.insertAtTail(list_head_1, node1);
list_head_1 = LinkedList.insertAtTail(list_head_1, node2);

list_head_2 = LinkedList.insertAtTail(list_head_2, node1);

console.log("List 1:", LinkedList.display(list_head_1));
console.log("List 2:", LinkedList.display(list_head_2));

console.log("Intersect at", intersect(list_head_1, list_head_2));
