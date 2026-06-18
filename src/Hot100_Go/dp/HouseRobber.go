package dp

func rob(nums []int) int {
	n := len(nums)

	// dp: 0-i 最多可以偷到 dp[i] 的金额
	dp := make([]int, n)
	// base case
	dp[0] = nums[0]

	res := dp[0]

	for i := 1; i < n; i++ {
		// dp[i] = 0~i-2能偷到最多 + nums[i]

		// find max dp from 0 to i-2
		preMax := 0
		for j := range i - 1 {
			preMax = max(preMax, dp[j])
		}
		// get the max value of dp[i]
		dp[i] = preMax + nums[i]
		// update result
		res = max(res, dp[i])
	}

	return res
}
