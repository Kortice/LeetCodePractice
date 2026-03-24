/**
 * 二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中 至多出现一次 。
 * 该路径 至少包含一个 节点，且不一定经过根节点。
 * 
 * 路径和 是路径中各节点值的总和。
 * 
 * 给你一个二叉树的根节点 root ，返回其 最大路径和 。
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

// function maxPathSum(root: TreeNode | null): number {

//   let res = Number.MIN_SAFE_INTEGER

//   const traverse = (root: TreeNode | null) => {
//     if (root === null) {
//       return
//     }

//     const leftMaxSum = singlePathSum(root.left)
//     const rightMaxSum = singlePathSum(root.right)
//     const maxSum = Math.max(leftMaxSum, rightMaxSum, leftMaxSum + rightMaxSum, 0) + root.val
//     res = Math.max(maxSum, res)

//     traverse(root.left)
//     traverse(root.right)
//   }

//   traverse(root)

//   return res
// };

// // 返回从root节点到叶子节点期间的最长路径和
// function singlePathSum(root: TreeNode | null): number {
//   if (root === null) {
//     return 0
//   }

//   const leftPathSum = Math.max(singlePathSum(root.left), 0)
//   const rightPathSum = Math.max(singlePathSum(root.right), 0)

//   return root.val + Math.max(leftPathSum, rightPathSum)
// }


// 这么说来可以直接在上面的singlePathSum函数进行修改
function maxPathSum(root: TreeNode | null): number {
  let res = Number.MIN_SAFE_INTEGER

  // 返回单边最大路径和
  const oneSideMax = (root: TreeNode | null): number => {
    if (root === null) {
      return 0
    }

    const leftSideMax = Math.max(0, oneSideMax(root.left))
    const rightSideMax = Math.max(0, oneSideMax(root.right))

    const maxSum = leftSideMax + rightSideMax + root.val

    res = Math.max(res, maxSum)

    return Math.max(leftSideMax, rightSideMax) + root.val
  }

  if (root === null) {
    return 0
  }

  oneSideMax(root)

  return res
};