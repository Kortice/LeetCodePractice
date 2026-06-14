package binarytree

func kthSmallest(root *TreeNode, k int) int {
	var res int

	var traverse func(root *TreeNode)
	traverse = func(root *TreeNode) {
		if root == nil {
			return
		}

		if k == 0 {
			return
		}

		traverse(root.Left)

		k--
		if k == 0 {
			res = root.Val
		}

		traverse(root.Right)
	}

	traverse(root)

	return res
}
