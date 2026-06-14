package binarytree

func inorderTraversal(root *TreeNode) []int {
	var ret []int

	var traverse func(root *TreeNode)
	traverse = func(root *TreeNode) {
		// base case
		if root == nil {
			return
		}

		traverse(root.Left)

		// inorder
		ret = append(ret, root.Val)

		traverse(root.Right)
	}

	traverse(root)

	return ret
}
