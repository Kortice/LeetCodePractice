/**
 * 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
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

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null)
    return []

  const q: TreeNode[] = []
  q.push(root)

  const res: number[][] = []

  while (q.length > 0) {
    let sz = q.length
    const temp: number[] = []

    for (let i = 0; i < sz; i++) {
      const p = q.shift()
      temp.push(p!.val)

      if (p!.left !== null) {
        q.push(p!.left)
      }

      if (p!.right !== null) {
        q.push(p!.right)
      }
    }

    res.push(temp)
  }

  return res
}