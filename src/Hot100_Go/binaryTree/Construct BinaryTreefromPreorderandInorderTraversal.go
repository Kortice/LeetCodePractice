package binarytree

func buildTree(preorder []int, inorder []int) *TreeNode {
	// preorder: [root left right]
	// inorder: [left root right]

	valToIdx := make(map[int]int, len(inorder))
	for idx, val := range inorder {
		valToIdx[val] = idx
	}

	var build func([]int, int, int, int, int) *TreeNode
	build = func(preorder []int, preStart, preEnd, inStart, inEnd int) *TreeNode {
		if preStart > preEnd {
			return nil
		}

		rootVal := preorder[preStart]
		root := &TreeNode{Val: rootVal}
		idx := valToIdx[rootVal]
		leftSize := idx - inStart // attention

		root.Left = build(preorder, preStart+1, preStart+leftSize, inStart, idx-1)
		root.Right = build(preorder, preStart+leftSize+1, preEnd, idx+1, inEnd)

		return root
	}

	return build(preorder, 0, len(preorder)-1, 0, len(inorder)-1)
}
