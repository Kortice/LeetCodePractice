package greedy

func canJump(nums []int) bool {
	// 记录当前最远能到达的位置
	farthest := 0
	for i, num := range nums {
		// 更新目前能到达的最远位置
		farthest = max(farthest, i+num)
		// 都还没走到末尾就到最远的了
		if i == farthest && farthest != len(nums)-1 {
			return false
		}
	}

	return true
}
