package binarytree

func pathSum(root *TreeNode, targetSum int) int {
	count := make(map[int]int)

	preSum := 0
	count[preSum]++

	res := 0
	var traverse func(*TreeNode)
	traverse = func(root *TreeNode) {
		if root == nil {
			return
		}

		preSum += root.Val

		if c, ok := count[preSum-targetSum]; ok {
			res += c
		}

		count[preSum]++

		traverse(root.Left)
		traverse(root.Right)

		count[preSum]--
		preSum -= root.Val
	}

	traverse(root)

	return res
}
