package dp

func climbStairs(n int) int {
	// base case
	i1 := 1
	i2 := 1

	res := i1
	for i := 2; i <= n; i++ {
		res = i1 + i2
		i1, i2 = res, i1
	}

	return res
}

// #region
// func climbStairs(n int) int {
// 	// dp: 爬到 i 层有 dp[i] 种方法
// 	dp := make([]int, n+1)
// 	// base case
// 	dp[0] = 1
// 	dp[1] = 1

// 	for i := 2; i <= n; i++ {
// 		dp[i] = dp[i-1] + dp[i-2]
// 	}

// 	return dp[n]
// }
// #endregion
