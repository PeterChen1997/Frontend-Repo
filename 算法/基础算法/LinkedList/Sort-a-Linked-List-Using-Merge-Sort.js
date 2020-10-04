/**
 * Given the head pointer of a linked sort, sort the linked list in ascending order using merge sort, and return the new head pointer of sorted linked list.
 */

import LinkedList from "./Implementation-of-Linked-List.js";

// 归并排序
// 拆分 / 递归 / 合并
// time: nlogn
// space: logn

let splitInHalf = function (head) {
    if (!head) {
        return;
    }

    let fastPointer = head.next;
    let slowPointer = head;
    while (fastPointer && fastPointer.next) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    let secondPointer = slowPointer.next;
    slowPointer.next = null;

    return [head, secondPointer];
};

let mergeSortedLists = function (headOne, headTwo) {
    if (!headOne) {
        return headTwo;
    } else if (!headTwo) {
        return headOne;
    }

    let resultPointer;
    if (headOne.data > headTwo.data) {
        resultPointer = headTwo;
        headTwo = headTwo.next;
    } else {
        resultPointer = headOne;
        headOne = headOne.next;
    }

    let tempPointer = resultPointer;
    while (headOne && headTwo) {
        if (headOne.data > headTwo.data) {
            tempPointer.next = headTwo;
            headTwo = headTwo.next;
        } else {
            tempPointer.next = headOne;
            headOne = headOne.next;
        }
        tempPointer = tempPointer.next;
    }

    if (headOne) {
        tempPointer.next = headOne;
    } else if (headTwo) {
        tempPointer.next = headTwo;
    }

    return resultPointer;
};

let mergeSort = function (head) {
    if (!head || !head.next) {
        return head;
    }

    let headOne, headTwo;
    [headOne, headTwo] = splitInHalf(head);

    headOne = mergeSort(headOne);
    headTwo = mergeSort(headTwo);

    return mergeSortedLists(headOne, headTwo);
};

let v1 = [29, 23, 82, 11, 4, 3, 21];
let listHead1 = LinkedList.createLinkedList(v1);
console.log("Unsorted list:", LinkedList.display(listHead1));

listHead1 = mergeSort(listHead1);
console.log("Sorted lists:", LinkedList.display(listHead1));
