package binarytree

func diameterOfBinaryTree(root *TreeNode) int {
	// 一个节点：左深度+右深度
	// 遍历每个节点取 max
	var res int

	// maxDepth 返回 root 节点的最大深度
	var maxDepth func(root *TreeNode) int
	maxDepth = func(root *TreeNode) int {
		if root == nil {
			return 0
		}

		leftDepth := maxDepth(root.Left)
		rightDepth := maxDepth(root.Right)

		// postorder
		res = max(res, leftDepth+rightDepth)

		return max(leftDepth, rightDepth) + 1
	}

	maxDepth(root)

	return res
}
