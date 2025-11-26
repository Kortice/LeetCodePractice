/**
 * 给你一棵二叉树的根节点，返回该树的 直径 。
 * 
 * 二叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 root 。
 * 
 * 两节点之间路径的 长度 由它们之间边数表示。
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

function diameterOfBinaryTree(root: TreeNode | null): number {

  let maxDiameter = 0

  // 返回以 root 为根节点的最大深度
  const maxDepth = (root: TreeNode | null): number => {
    if (root === null)
      return 0

    const leftDepth = maxDepth(root.left)
    const rightDepth = maxDepth(root.right)

    const dimater = leftDepth + rightDepth
    maxDiameter = Math.max(maxDiameter, dimater)

    return 1 + Math.max(leftDepth, rightDepth)
  }

  maxDepth(root)

  return maxDiameter
}