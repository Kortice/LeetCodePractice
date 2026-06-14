package binarytree

func invertTree(root *TreeNode) *TreeNode {
	// base case
	if root == nil {
		return root
	}

	left := invertTree(root.Left)
	right := invertTree(root.Right)

	root.Left, root.Right = right, left

	return root
}
