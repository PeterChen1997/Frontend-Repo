// 题目描述：删除链表中重复的节点

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function deleteDuplication(pHead)
{
    if(!pHead || !pHead.next) {
      return pHead
    }
    let pre = new ListNode(Infinity)
    pre.next = pHead

    let p = pre
    let afterP = p.next

    while(afterP) {
      while(afterP.next && (afterP.next.val === afterP.val)) {
        afterP = afterP.next
      }
      if(p.next !== afterP) {
        p.next = afterP.next
      } else {
        p = afterP
      }
      afterP = afterP.next
    }
    return pre.next
}