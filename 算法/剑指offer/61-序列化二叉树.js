// 请实现两个函数，分别用来序列化和反序列化二叉树

// 解释：序列化（持久化）：把一棵二叉树按照某种遍历方式的结果以某种格式保存为字符串，从而使得内存中建立起来的二叉树可以持久保存
// 二叉树的反序列化是指：根据某种遍历顺序得到的序列化字符串结果str，重构二叉树。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 思路：先序遍历进行递归存储，递归拆解

let arr = []

function Serialize(pRoot)
{
    // 根据先序遍历保存数组
    if(!pRoot) {
      arr.push('end')
    } else {
      arr.push(pRoot.val)
      Serialize(pRoot.left)
      Serialize(pRoot.right)
    }
}
function Deserialize(s)
{
    // 拆解数组
    if(arr.length < 1) {
      return null
    }
    let head = arr.shift()
    let node
    if(typeof head === 'number') {
      node = new TreeNode(head)
      node.left = Deserialize(node.left)
      node.right = Deserialize(node.right)
    }
    
    return node
    
}