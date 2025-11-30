/**
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 小的元素（从 1 开始计数）。
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


function kthSmallest(root: TreeNode | null, k: number): number {
  let rank = 0
  let res: number

  const traverse = (root: TreeNode | null) => {
    if (root === null)
      return

    traverse(root.left)

    rank++
    if (rank === k) {
      res = root.val
      return
    }

    traverse(root.right)

  }

  traverse(root)

  return res!
}