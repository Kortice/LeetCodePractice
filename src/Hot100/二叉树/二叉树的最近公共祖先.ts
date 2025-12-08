/**
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

  const find = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null => {
    // base case
    if (root === null) {
      return null
    }

    // 前序位置 如果root就说目标值
    if (root.val === p?.val || root.val === q?.val) {
      return root
    }

    // 去左右子树找
    const left = find(root.left, p, q)
    const right = find(root.right, p, q)

    // 后续位置 已经知道找没找到了
    if (left !== null && right !== null) {
      // 左右子树分别有p和q 说明root就是LCA
      return root
    }

    return left !== null ? left : right
  }

  return find(root, p, q)
}