/**
 * Remove duplicate nodes from a linked list of integers while keeping only the first occurrence of duplicates.
 */

import LinkedList from "./Implementation-of-Linked-List.js";

// time: n
// space: n
// space can be 1 if time can be n ^ 2
let removeDuplicates = function (head) {
    if (!head) {
        return;
    }

    let hashTable = {};
    let temp = head;
    let pre = temp;
    while (temp) {
        if (!(temp.data in hashTable)) {
            hashTable[temp.data] = 1;
            pre = temp;
        } else {
            // jump the dupulicate node
            pre.next = temp.next;
        }

        // jump to the next node
        temp = temp.next;
    }

    return head;
};

let headWithDup = LinkedList.createLinkedList([4, 7, 4, 9, 7, 11, 4]);

let tempHeadWithDup = headWithDup;
console.log("Original: ", LinkedList.display(tempHeadWithDup));

headWithDup = removeDuplicates(headWithDup);
console.log("After removing duplicates: ", LinkedList.display(tempHeadWithDup));
