/**
 * Given the head of a linked list and a key, delete the node with this given key from the linked list.
 */
import LinkedList from "./Implementation-of-Linked-List.js";

let deleteNode = function (head, key) {
    if (!head || typeof key === undefined) {
        return;
    }

    let temp = head;
    let pre = head;
    while (temp) {
        if (temp.data === key) {
            if (pre === head) {
                head = head.next;
                pre = head;
            } else {
                pre.next = temp.next;
            }
        }

        pre = temp;
        temp = temp.next;
    }

    return head;
};

let listHead = LinkedList.createLinkedList([20, 14, 36, 11, 72, 41]);

console.log("Original:", LinkedList.display(listHead));
listHead = deleteNode(listHead, 41);
console.log("After deleting 72 from list:", LinkedList.display(listHead));
