/**
 * 给定两个整数数组 preorder 和 inorder
 * 其中
 * preorder 是二叉树的先序遍历
 * inorder 是同一棵树的中序遍历
 * 请构造二叉树并返回其根节点。
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const valToIndex = new Map<number, number>()
  for (let i = 0; i < inorder.length; i++)
    valToIndex.set(inorder[i], i)

  const build = (preorder: number[], preStart: number, preEnd: number, inorder: number[], inStart: number, inEnd: number): TreeNode | null => {
    if (preStart > preEnd)
      return null

    const rootVal = preorder[preStart]
    const index = valToIndex.get(rootVal)
    const leftSize = index! - inStart

    const root = new TreeNode(rootVal)

    root.left = build(preorder, preStart + 1, preStart + leftSize, inorder, inStart, index! - 1)
    root.right = build(preorder, preStart + 1 + leftSize, preEnd, inorder, index! + 1, inEnd)

    return root
  }

  const root = build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)

  return root
}