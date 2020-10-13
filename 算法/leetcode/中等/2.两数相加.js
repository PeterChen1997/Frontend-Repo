/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

 */

 import LinkedList, { LinkedListNode } from "../../基础算法/Linkedlist/Implementation-of-Linked-List.js";

var addTwoNumbers = function (l1, l2) {
    if (!l1 || !l2) {
        return null
    }

    let newList = null
    let temp = newList
    let carry = 0
    while (l1 && l2) {
        let curVal = l1.data + l2.data;
        if (carry) {
            curVal += carry
            carry = 0
        }
        if (curVal > 9) {
            carry = 1
            curVal = curVal % 10
        }

        const node = new LinkedListNode(curVal);
        
        if (!newList) {
            newList = node
            temp = node
        } else {
            temp.next = node
            temp = temp.next
        }
        
        l1 = l1.next
        l2 = l2.next
    }

    while (carry) {
        if (l1) {
            let curVal = l1.data
            if (carry) {
                curVal += carry
                carry = 0
            }
            if (curVal > 9) {
                carry = 1
                curVal = curVal % 10
            }

            const node = new LinkedListNode(curVal);

            temp.next = node
            temp = temp.next

            l1 = l1.next
        } else if (l2) {
            let curVal = l2.data
            if (carry) {
                curVal += carry
                carry = 0
            }
            if (curVal > 9) {
                carry = 1
                curVal = curVal % 10
            }

            const node = new LinkedListNode(curVal);

            temp.next = node
            temp = temp.next

            l2 = l2.next
        } else {
            const node = new LinkedListNode(carry);
            carry = 0
            temp.next = node;
            temp = temp.next;
        }
    } 

    if (l1) {
        temp.next = l1;
    }

    if (l2) {
        temp.next = l2;
    }

    return newList;
};


const listOne = LinkedList.createLinkedList([9, 9, 9]);
const listTwo = LinkedList.createLinkedList([9, 9, 9, 9, 9]);
console.log("Original list:", LinkedList.display(listOne));
console.log("Original list:", LinkedList.display(listTwo));

const listHead = addTwoNumbers(listOne, listTwo);
console.log("List addTwoNumbers:", LinkedList.display(listHead));