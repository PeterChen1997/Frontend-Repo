// 题目描述：给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/

function GetNext(pNode)
{
    if(!pNode) {
      return null
    }
    // 存在右子树，往右边走
    if(pNode.right) {
      let p = pNode.right
      // 寻找右子树的最左结点
      while(p.left) {
        p = p.left
      }
      return p
    }
    // 没有右子树，往上找
    while(pNode.next) {
      // 找父节点
      // 如果为父节点的左结点
      if(pNode === pNode.next.left) {
        return pNode.next
      }
      // 否则继续往上找
      pNode = pNode.next
    }
    return null
}