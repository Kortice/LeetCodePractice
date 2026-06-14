package binarytree

func lowestCommonAncestor(root, p, q *TreeNode) *TreeNode {
	// 最近公共祖先
	// 最近 -> 这个好像比较难转换？
	// 公共祖先 -> 从这个祖先下去，左右子树里面能找到 p 和 q

	// 这个解法因为保证了 p q 存在 Ancestor

	// 这个解法本质：
	// 假设 p 在 left; q 在 right
	// 找到 p -> left = p; 找到 q -> right = q
	// 足以说明 root 就是 Ancestor

	// find 找到 p 或 q 节点
	var find func(*TreeNode, *TreeNode, *TreeNode) *TreeNode
	find = func(root, p, q *TreeNode) *TreeNode {
		if root == nil {
			return nil
		}

		if root.Val == p.Val || root.Val == q.Val {
			return root
		}

		left := find(root.Left, p, q)
		right := find(root.Right, p, q)

		// 左边找到一个 右边找到一个
		// root 就是 ancestor 了
		if left != nil && right != nil {
			return root
		}

		// 上面的 else -> 只有一边找到

		// 左边找到
		if left != nil {
			return left
		}

		// 右边找到
		return right
	}

	return find(root, p, q)
}
