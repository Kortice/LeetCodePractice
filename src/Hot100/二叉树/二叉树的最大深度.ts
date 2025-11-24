/**
 * 给定一个二叉树 root ，返回其最大深度。
 * 
 * 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

// 子问题 
// 函数定义：以root为根的二叉树的最大深度 ==> 左子树的最大深度 和 右子树的最大深度 中最大的
function maxDepth(root: TreeNode | null): number {
  if (root === null)
    return 0

  const leftMax = maxDepth(root.left)
  const rightMax = maxDepth(root.right)

  return 1 + Math.max(leftMax, rightMax)
}

// 遍历
// function maxDepth(root: TreeNode | null): number {

//   let count = 0
//   let maxCount = 0

//   const reserve = (root: TreeNode | null) => {
//     if (root === null)
//       return

//     // 进入节点
//     count++
//     // 如果是叶子节点
//     if (root.left === null && root.right === null)
//       maxCount = Math.max(maxCount, count)

//     reserve(root.left)
//     reserve(root.right)

//     // 离开节点
//     count--
//   }

//   reserve(root)

//   return maxCount
// }
