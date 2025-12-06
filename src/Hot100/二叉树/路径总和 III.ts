/**
 * 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。
 * 
 * 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
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


function pathSum(root: TreeNode | null, targetSum: number): number {
  // 记录前缀和
  // 从根节点出发，和为preSum的路径的个数为 preSumCount.get(preSum)
  const preSumCount = new Map<number, number>()
  // 记录当前路径和
  let pathsum = 0
  // 记录结果
  let res = 0

  const traverse = (root: TreeNode | null) => {
    if (root === null)
      return

    // 前序
    pathsum += root.val
    // pathsum - targetSum 的路径个数就是满足条件的路径个数
    res += (preSumCount.get(pathsum - targetSum) || 0)
    // 添加到记录中
    preSumCount.set(pathsum, (preSumCount.get(pathsum) || 0) + 1)

    traverse(root.left)
    traverse(root.right)

    // 后序
    preSumCount.set(pathsum, preSumCount.get(pathsum)! - 1)
    pathsum -= root.val
  }

  if (root === null)
    return 0

  preSumCount.set(0, 1)
  traverse(root)

  return res
}