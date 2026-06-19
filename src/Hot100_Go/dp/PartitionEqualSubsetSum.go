package dp

func canPartition(nums []int) bool {
	sum := 0
	for _, num := range nums {
		sum += num
	}

	// 奇数
	if sum%2 != 0 {
		return false
	}

	target := sum / 2
	n := len(nums)
	// dp: dp[i][j] 前i个数可以凑成j吗
	dp := make([][]bool, n+1)
	for i := range dp {
		dp[i] = make([]bool, target+1)
	}
	// base case
	// dp[0][...] = false
	// dp[...][0] = true
	for i := range dp {
		dp[i][0] = true
	}

	for i := 1; i < n+1; i++ {
		for j := 1; j < target+1; j++ {
			if j-nums[i-1] < 0 {
				dp[i][j] = dp[i-1][j]
			} else {
				// 						不装入  或				装入
				dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]]
			}
		}
	}

	return dp[n][target]
}
