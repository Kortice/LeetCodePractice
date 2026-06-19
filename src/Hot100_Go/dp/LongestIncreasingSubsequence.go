package dp

func lengthOfLIS(nums []int) int {
	n := len(nums)
	// dp: 以 nums[i] 结尾的最长递增子序列的长度为 dp[i]
	dp := make([]int, n)
	// base case
	dp[0] = 1

	for i := 1; i < n; i++ {
		dp[i] = 1
		for j := range i {
			if nums[j] < nums[i] {
				dp[i] = max(dp[i], dp[j]+1)
			}
		}
	}

	res := 1
	for _, length := range dp {
		res = max(res, length)
	}
	return res
}
