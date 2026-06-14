package binarytree

func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return nil
	}

	var q []*TreeNode
	q = append(q, root)

	var res [][]int
	for len(q) > 0 {
		sz := len(q)
		var tmp []int
		for range sz {
			node := q[0]
			q = q[1:]

			tmp = append(tmp, node.Val)

			if node.Left != nil {
				q = append(q, node.Left)
			}
			if node.Right != nil {
				q = append(q, node.Right)
			}
		}
		res = append(res, tmp)
	}

	return res
}
