package binarytree

func isSymmetric(root *TreeNode) bool {
	// check 两棵树是不是轴对称
	var check func(left *TreeNode, right *TreeNode) bool
	check = func(left, right *TreeNode) bool {
		// base case
		if left != nil && right != nil {
			if left.Val != right.Val {
				return false
			}
		} else if left == nil && right == nil {
			return true
		} else {
			return false
		}

		return check(left.Left, right.Right) && check(left.Right, right.Left)
	}

	return check(root.Left, root.Right)
}
