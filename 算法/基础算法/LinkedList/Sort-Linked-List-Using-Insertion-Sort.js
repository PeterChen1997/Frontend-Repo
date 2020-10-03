/**
 * Given the head pointer of a linked list, sort it in ascending order using insertion sort.
 */

import LinkedList from "./Implementation-of-Linked-List.js";

// insertion sort
// time: n2
// space: 1
function insertionSort(head) {
    if (!head) {
        return;
    }

    let resultPotiner = null;
    let curPointer = head;
    while (curPointer) {
        // remove curNode
        let curNode = curPointer;
        curPointer = curNode.next;
        curNode.next = null;

        // insert into resultLinkList
        let pre = null;
        let temp = resultPotiner;
        // first node
        if (temp === null) {
            resultPotiner = curNode;
            continue;
        }
        // node inside
        while (temp) {
            let insertData = curNode.data;
            let curData = temp.data;

            if (insertData < curData) {
                if (pre === null) {
                    curNode.next = temp;
                    resultPotiner = curNode;
                } else {
                    pre.next = curNode;
                    curNode.next = temp;
                }
                break;
            }

            pre = temp;
            temp = temp.next;
        }
        // node end
        if (temp === null) {
            pre.next = curNode;
            curNode.next = null;
        }
    }

    return resultPotiner;
}

let headBeforeSort = LinkedList.createLinkedList([29, 23, 82, 11]);
console.log("Original:", LinkedList.display(headBeforeSort));

let headAfterSort = insertionSort(headBeforeSort);
console.log("After sorting:", LinkedList.display(headAfterSort));
