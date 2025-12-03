/**
 * 给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 平衡 二叉搜索树。
 * 
 * 平衡二叉树 是指该树所有节点的左右子树的高度相差不超过 1。
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


function sortedArrayToBST(nums: number[]): TreeNode | null {

  // 函数定义：以闭区间[lo, hi]构造BST
  const build = (lo: number, hi: number): TreeNode | null => {
    // base case
    if (lo > hi)
      return null

    const mid = Math.floor((lo + hi) / 2)
    const root = new TreeNode(nums[mid])
    // 左子树
    root.left = build(lo, mid - 1)
    // 右子树
    root.right = build(mid + 1, hi)

    return root
  }

  return build(0, nums.length - 1)
}