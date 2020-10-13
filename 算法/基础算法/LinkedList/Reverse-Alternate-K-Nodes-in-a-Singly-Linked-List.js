/**
 * Given a singly linked list and an integer 'k', reverse every 'k' element. If k <= 1, then the input list is unchanged. If k >= n (n is the length of linked list), then reverse the whole linked list.≈
 */

import LinkedList, {
    getLinkedListLen
} from "./Implementation-of-Linked-List.js";

let splitKNode = function (head, k, offset) {
    let pre;
    let start;
    let end;

    // get pre and start
    if (offset === 0) {
        pre = null;
        start = head;
    } else {
        pre = head;
        while (offset > 1) {
            pre = pre.next;
            offset--;
        }
        start = pre.next;
    }

    // get end
    let temp = start;
    while (temp.next && k > 1) {
        k--;
        temp = temp.next;
    }
    end = temp;

    return [pre, start, end];
};

let reverseNodes = function (pre, start, end) {
    let nextNode = end.next;

    // reverse start to end
    let curTemp = start;
    let preTemp;
    let next;
    let endNode = end.next;
    while (curTemp !== endNode) {
        next = curTemp.next;
        curTemp.next = preTemp;
        preTemp = curTemp;
        curTemp = next;
    }

    // join
    if (pre) {
        pre.next = end;
    }
    start.next = nextNode;

    return;
};

let reverseKNodes = function (head, k) {
    if (!head || k <= 0) {
        return head;
    }

    let listLen = getLinkedListLen(head);
    let offset = 0;
    while (offset < listLen) {
        // split k node
        let [pre, startPointer, endPointer] = splitKNode(head, k, offset);

        // reverse first part node
        if (!pre) {
            head = endPointer;
        }
        reverseNodes(pre, startPointer, endPointer);

        // add offset
        offset += k;
    }

    return head;
};

let listHead = LinkedList.createLinkedList([1, 2, 3, 4, 5, 6, 7]);
console.log("Original list:", LinkedList.display(listHead));

listHead = reverseKNodes(listHead, 3);
console.log("List reversed by 4:", LinkedList.display(listHead));
