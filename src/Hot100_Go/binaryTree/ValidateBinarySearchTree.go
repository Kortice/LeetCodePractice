package binarytree

// 后序解法
// func isValidBST(root *TreeNode) bool {
// 	// BST定义：
// 	// 左子树的值都严格小于当前节点的值 -> left max value < node.val
// 	// 右子树的值都严格大于当前节点的值 -> right min value > node.val
// 	// 左右子树也是BST -> 递归检查

// 	// 是否是BST minValue maxValue
// 	var check func(root *TreeNode) (bool, int, int)
// 	check = func(root *TreeNode) (bool, int, int) {
// 		minValue, maxValue := root.Val, root.Val

// 		if root.Left != nil {
// 			ok, leftMin, leftMax := check(root.Left)
// 			if !ok || leftMax >= root.Val {
// 				return false, 0, 0
// 			}
// 			minValue = leftMin
// 		}

// 		if root.Right != nil {
// 			ok, rightMin, rightMax := check(root.Right)
// 			if !ok || rightMin <= root.Val {
// 				return false, 0, 0
// 			}
// 			maxValue = rightMax
// 		}

// 		return true, minValue, maxValue
// 	}

// 	if root == nil {
// 		return true
// 	}

// 	valid, _, _ := check(root)

// 	return valid
// }

// 前序解法
func isValidBST(root *TreeNode) bool {
	var check func(root, min, max *TreeNode) bool
	check = func(root, min, max *TreeNode) bool {
		if root == nil {
			return true
		}

		if min != nil {
			if root.Val <= min.Val {
				return false
			}
		}

		if max != nil {
			if root.Val >= max.Val {
				return false
			}
		}

		return check(root.Left, min, root) && check(root.Right, root, max)
	}

	return check(root, nil, nil)
}
