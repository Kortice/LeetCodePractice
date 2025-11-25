/**
 * 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
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


function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null)
    return null

  const leftRoot = invertTree(root.left)
  const rightRoot = invertTree(root.right)

  root.left = rightRoot
  root.right = leftRoot

  return root
}