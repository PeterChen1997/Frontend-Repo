/**
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:

输入: 1->1->2->3->3
输出: 1->2->3
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { ListNode, gen } = require('../data-struct/list-node')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
    if (!head) {
        return head
    }

    let p1 = head
    let curValue = p1.val
    while (p1.next) {
        if (curValue !== p1.next.val) {
            curValue = p1.next.val
            p1 = p1.next
        } else {
            p1.next = p1.next.next
        }
    }
    return head
};

console.log(deleteDuplicates(gen([1,1,2,3,4])))