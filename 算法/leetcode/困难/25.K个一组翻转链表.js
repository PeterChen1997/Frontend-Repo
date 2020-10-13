/**
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

 

示例：

给你这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

当 k = 3 时，应当返回: 3->2->1->4->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

 import LinkedList, { getLinkedListLen } from "../../基础算法/Linkedlist/Implementation-of-Linked-List.js";

function swap(head, k, offset) {
    if (offset === 0) {
        let temp = head
        let tail = head
        let next = null
        let pre = null
        while (temp && k > 0) {
            next = temp.next
            temp.next = pre
            pre = temp
            temp = next

            k--
        }

        tail.next = temp

        return pre
    } else {
        let temp = head
        let pre
        while (offset !== 0) {
            pre = temp
            temp = temp.next
            offset--
        }

        let nextHead = swap(temp, k, 0)
        pre.next = nextHead

        return head
    }
}
var reverseKGroup = function(head, k) {
    if (!head || k <= 1) {
        return head
    }

    let len = getLinkedListLen(head)

    let tempLen = len
    while (tempLen - k >= 0) {
        head = swap(head, k, len - tempLen)
        tempLen -= k
    }

    return head
};


let listHead = LinkedList.createLinkedList([1, 2]);
console.log("Original list:", LinkedList.display(listHead));

listHead = reverseKGroup(listHead, 2);
console.log("List reversed by 4:", LinkedList.display(listHead));