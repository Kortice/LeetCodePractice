package binarytree

func maxDepth(root *TreeNode) int {
	// base case
	if root == nil {
		return 0
	}

	return max(maxDepth(root.Left), maxDepth(root.Right)) + 1
}
