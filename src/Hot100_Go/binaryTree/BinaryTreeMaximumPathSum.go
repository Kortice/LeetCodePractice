package binarytree

import "math"

func maxPathSum(root *TreeNode) int {
	res := math.MinInt

	// traverse 返回 root 为根的最长路径
	var traverse func(*TreeNode) int
	traverse = func(root *TreeNode) int {
		if root == nil {
			return 0
		}

		leftMax := traverse(root.Left)
		rightMax := traverse(root.Right)

		// 取0就是不走那一边
		maxSum := max(leftMax, 0) + max(rightMax, 0) + root.Val
		res = max(res, maxSum)

		// 这里取最大的，因为路径只能走一边（或者不走）。
		return max(leftMax, rightMax, 0) + root.Val
	}

	traverse(root)

	return res
}
