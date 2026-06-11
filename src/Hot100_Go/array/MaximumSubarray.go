package array

func maxSubArray(nums []int) int {
	// define: dp[i] 为以 nums[i] 为结尾的连续子数组的最大和
	dp := make([]int, len(nums))
	dp[0] = nums[0]

	for i := 1; i < len(nums); i++ {
		// dp[i-1]+nums[i] or nums[i]
		dp[i] = max(dp[i-1]+nums[i], nums[i])
	}

	res := dp[0]
	for _, num := range dp {
		res = max(res, num)
	}
	return res
}
