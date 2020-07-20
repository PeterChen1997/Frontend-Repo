/**
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 首遍思路： [迭代] 用两个指针 + 一个新链表，交替对比改变next指向完成拼接
// 较好思路： [递归] 调用自身
// 时间复杂度：o(n+m)
// 空间复杂度：o(1)

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
    const resultListNode = new ListNode()

    let p1 = l1, p2 = l2, p3 = resultListNode

    while(p1.val || p2.val) {
        if (!p1.val) {
            p3.next = new ListNode(p2.val, null)
            p2 = p2.next 
        } else if (!p2.val) {
            p3.next = new ListNode(p1.val, null)
            p1 = p1.next 
        } else {
            if (p1.val >= p2.val) {
                p3.next = new ListNode(p2.val, null)
                p2 = p2.next
            } else {
                p3.next = new ListNode(p1.val, null)
                p1 = p1.next
            }
        }
        p3 = p3.next
    }

    return resultListNode.next
};

function listNodeGen(valArr) {
    if (!valArr.length) {
        return new ListNode()
    }
    return new ListNode(valArr.shift(), listNodeGen(valArr))
}

let l1 = listNodeGen([1,2,4])
let l2 = listNodeGen([1,3,4])
console.log(mergeTwoLists(l1, l2))