/**
 * Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N)O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.

Example 1:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true
Example 2:

Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false
 */

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function reverseLinkList(pointer) {
    let pre = null
    let next = null
    while (pointer !== null) {
        // get next node
        next = pointer.next
        // set next node
        pointer.next = pre
        // save pre node
        pre = pointer
        // set pointer
        pointer = next
    }
}

const is_palindromic_linked_list = function (head) {
    // 找到中间结点
    let slowPointer = head
    let fastPointer = head

    while (fastPointer !== null &&  fastPointer.next !== null) {
        fastPointer = fastPointer.next.next
        slowPointer = slowPointer.next
    }

    halfLinkListPointer = slowPointer
    copyHalfLinkListPointer = halfLinkListPointer

    // 反转后半部分
    reverseLinkList(copyHalfLinkListPointer)

    // 开始对比中间值
    while (head !== null || halfLinkListPointer !== null) {
        if (head.value !== halfLinkListPointer.value) {
            break
        }
        head = head.next
        halfLinkListPointer = halfLinkListPointer.next
    }

    // 判断情况
    if (head === halfLinkListPointer) {
        return true
    }

    return false;
};


head = new Node(2)
head.next = new Node(4)
head.next.next = new Node(6)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(2)

// console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)

head.next.next.next.next.next = new Node(2)
console.log(`Is palindrome: ${is_palindromic_linked_list(head)}`)
