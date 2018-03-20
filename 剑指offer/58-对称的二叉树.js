// 题目描述：请实现一个函数，用来判断一颗二叉树是不是对称的。注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

// 递归查看左右子树是否相等
function isSymmetricalII(lRoot,rRoot) {
  if(!lRoot && !rRoot) {
    return true
  } else if (!lRoot || !rRoot) {
    return false
  } else if (lRoot.val !== rRoot.val) {
    return false
  }
  return isSymmetricalII(lRoot.left,rRoot.right) && isSymmetricalII(lRoot.right,rRoot.left)
}

function isSymmetrical(pRoot)
{
  if(!pRoot) {
    return true
  } else if(pRoot.left && !pRoot.right || !pRoot.left && pRoot.right ) {
    return false
  }
  
  return isSymmetricalII(pRoot.left,pRoot.right)
}