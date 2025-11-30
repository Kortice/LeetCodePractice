/**
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
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


function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true

  // 定义：判断两棵树是否镜像对称
  const check = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (left === null || right === null) {
      return left === right
    }

    if (left.val !== right.val) return false

    return check(left.left, right.right) && check(left.right, right.left)
  }

  return check(root.left, root.right)

}