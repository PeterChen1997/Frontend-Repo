// 题目描述：从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot)
{
    if(!pRoot) {
      return []
    }
    let res = []
    let temp = [pRoot]
    
    while(temp.length !== 0) {
      let length = temp.length
      let tempValue = []

      while(length) {
        let node = temp.shift()
        tempValue.push(node.val)
        node.left && temp.push(node.left)
        node.right && temp.push(node.right)
        length--
      }

      res.push(tempValue)
    }
    return res
}