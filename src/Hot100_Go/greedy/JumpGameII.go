package greedy

func jump(nums []int) int {
	// step步能到达最远距离为farthest
	farthest := 0
	step := 0
	for i := range nums {
		if farthest >= len(nums)-1 {
			return step
		}
		// step+1步能到的最远距离
		// = 当前能到的最远距离里面计算出来的最远距离
		step++
		curFarthest := farthest
		for j := i; j <= curFarthest; j++ {
			farthest = max(farthest, j+nums[j])
		}
		// update i
		i = curFarthest + 1
	}

	return -1
}
