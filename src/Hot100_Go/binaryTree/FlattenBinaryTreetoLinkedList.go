package binarytree

func flatten(root *TreeNode) {
	if root == nil {
		return
	}

	// flatten left tree
	flatten(root.Left)
	// flatten right tree
	flatten(root.Right)

	if root.Left == nil {
		return
	}

	// root.Left != nil
	// concat left and right
	left, right := root.Left, root.Right
	root.Left, root.Right = nil, nil

	p := left
	for p.Right != nil {
		p = p.Right
	}

	p.Right = right
	root.Right = left
}
