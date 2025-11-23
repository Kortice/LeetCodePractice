/**
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = []

  const inorder = (root: TreeNode | null) => {
    if (root === null)
      return null

    inorder(root.left)
    res.push(root.val)
    inorder(root.right)

  }

  inorder(root)


  return res
}