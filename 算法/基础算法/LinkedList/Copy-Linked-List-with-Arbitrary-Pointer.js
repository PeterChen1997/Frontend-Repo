/**
 * Make a deep copy of the given linked list where each node has two pointers: 'next' and 'arbitrary_pointer'.
 */

import LinkedList, { LinkedListNode } from "./Implementation-of-Linked-List.js";

// 思路：先复制新结点和原有指针关系，后续在更新指针关系
// time: N
// space: N

let deepCopyArbitraryPointer = function (head) {
    if (!head) {
        return head;
    }

    // fork list
    let newLinklistHead = null;
    let newLinkListTempPointer = null;
    let newNodeMap = new Map();
    let tempPointer = head;
    while (tempPointer) {
        const newNode = new LinkedListNode(tempPointer.data);
        newNode.arbitrary = tempPointer.arbitrary;

        newNodeMap.set(tempPointer, newNode);

        if (!newLinklistHead) {
            newLinklistHead = newNode;
            newLinkListTempPointer = newLinklistHead;
        } else {
            newLinkListTempPointer.next = newNode;
            newLinkListTempPointer = newLinkListTempPointer.next;
        }

        tempPointer = tempPointer.next;
    }

    // reset arbitrary pointer
    newLinkListTempPointer = newLinklistHead;
    while (newLinkListTempPointer) {
        if (newLinkListTempPointer.arbitrary) {
            let newNode = newNodeMap.get(newLinkListTempPointer.arbitrary);
            newLinkListTempPointer.arbitrary = newNode;
        }
        newLinkListTempPointer = newLinkListTempPointer.next;
    }

    return newLinklistHead;
};

let createLinkedListWithArbPointers = function (length) {
    let head = LinkedList.createRandomLinkedList(length);
    let v = [];
    let temp = head;
    while (temp) {
        v.push(temp);
        temp = temp.next;
    }

    for (let i = 0; i < v.length; i++) {
        let j = Math.floor(Math.random() * (v.length - 1));
        let p = Math.floor(Math.random() * 100);
        if (p < 75) {
            v[i].arbitrary = v[j];
        }
    }
    return head;
};

let printWithArbPointers = function (head) {
    let printedResult = "";
    while (head) {
        let temp = "";
        printedResult += head.data;
        if (head.arbitrary) {
            temp += head.arbitrary.data;
        }
        printedResult += " (" + temp + ")";
        head = head.next;
        if (head) printedResult += ", ";
    }
    return printedResult;
};

let head = createLinkedListWithArbPointers(5);
console.log("Original list:", printWithArbPointers(head));

let head2 = deepCopyArbitraryPointer(head);
console.log("Deep copied list:", printWithArbPointers(head2));

head = createLinkedListWithArbPointers(3);
console.log("Changed original list:", printWithArbPointers(head));

console.log("Unchanged deep copied list:", printWithArbPointers(head2));
