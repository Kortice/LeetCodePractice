package binarytree

func rightSideView(root *TreeNode) []int {
	var res []int

	depth := 0
	var traverse func(root *TreeNode)
	traverse = func(root *TreeNode) {
		if root == nil {
			return
		}

		// preorder
		if depth == len(res) {
			res = append(res, root.Val)
		}

		depth++
		traverse(root.Right)
		traverse(root.Left)
		depth--
	}

	traverse(root)

	return res
}
