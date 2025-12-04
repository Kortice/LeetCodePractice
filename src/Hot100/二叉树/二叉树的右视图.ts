/**
 * 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
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

function rightSideView(root: TreeNode | null): number[] {
  if (root === null)
    return []

  // 层序遍历
  const pq: TreeNode[] = []
  pq.push(root)
  // 存储结果
  const res: number[] = []

  while (pq.length > 0) {
    const sz = pq.length
    for (let i = 0; i < sz; i++) {
      const node = pq.shift()

      // 最后一个就是当前层最右边的
      if (i === sz - 1) {
        res.push(node!.val)
      }

      if (node!.left !== null) {
        pq.push(node!.left)
      }
      if (node!.right !== null) {
        pq.push(node!.right)
      }
    }
  }

  return res
}