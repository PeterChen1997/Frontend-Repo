/**
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = (root) => {
    if (!root) {
        return []
    }

    let arr = []
    let nodeArr = [root]
    
    while(nodeArr.length > 0) {
        arr.push(nodeArr[nodeArr.length - 1].val)
        
        let tempNodeArr = []
        for(let i = 0; i < nodeArr.length; i++) {
            const node = nodeArr[i]
            if (node.left) {
                tempNodeArr.push(node.left)
            }
            if (node.right) {
                tempNodeArr.push(node.right)
            }
        }
        nodeArr = tempNodeArr
    }

    return arr
};

console.log(rightSideView())