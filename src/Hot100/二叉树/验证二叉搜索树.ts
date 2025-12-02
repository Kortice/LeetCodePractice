/**
 * 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。
 * 
 * 有效 二叉搜索树定义如下：
 * 
 * 节点的左子树只包含 严格小于 当前节点的数。
 * 节点的右子树只包含 严格大于 当前节点的数。
 * 所有左子树和右子树自身必须也是二叉搜索树。
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


function isValidBST(root: TreeNode | null): boolean {

  // 定义：该函数返回 root 为根的子树的所有节点是否满足 min.val < root.val < max.val
  const _isValidBST = (root: TreeNode | null, min: TreeNode | null, max: TreeNode | null): boolean => {
    // base case
    if (root === null)
      return true
    if (min !== null && root.val <= min.val) return false
    if (max !== null && root.val >= max.val) return false

    return _isValidBST(root.left, min, root) && _isValidBST(root.right, root, max)
  }

  return _isValidBST(root, null, null)
}