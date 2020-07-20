// 题目描述：一个链表中包含环，请找出该链表的环的入口结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

// 解题思路： 
// 1. 一个指针走一步，一个指针走两步，如果在到Null之前重合，则证明有环存在
// 2. 假设这个环走了若干个结点，但是由于要圈上 多走整数圈数 才能相遇，则这个等式成立 2x = x + r*n，r为圈数
// 3. 那么此时新建一个从头开始，走一步的指针，同时继续走，走x步即可回到相遇点，但是如果在相遇点之前重合，则重合点为入口
function EntryNodeOfLoop(pHead) {
  if (!pHead || !pHead.next) {
    return null
  }
  let fast = pHead
  let slow = pHead
  // 题目已知有环
  while (1) {
    fast = fast.next
    slow = slow.next.next
    if (fast === slow) {
      break
    }
  }
  let result = pHead
  while (result !== slow) {
    slow = slow.next
    result = result.next
  }
  return result
}