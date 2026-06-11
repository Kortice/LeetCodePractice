package substring

func subarraySum(nums []int, k int) int {
	preSum := make([]int, len(nums)+1)

	preSum[0] = 0
	for i := range nums {
		preSum[i+1] = preSum[i] + nums[i]
	}

	res := 0
	// counts num -> count 记录 num 出现次数
	counts := make(map[int]int)

	for _, x := range preSum {
		// preSumj - preSumi = k (i < j)
		// preSumi = preSumj - k (x - k)
		// res += <count of preSumi>
		if count, ok := counts[x-k]; ok {
			res += count
		}
		counts[x]++
	}

	return res
}
