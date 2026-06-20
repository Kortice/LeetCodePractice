package multidp

func uniquePaths(m int, n int) int {
	// dp: 到[i][j]总共有dp[i][j]条路径
	dp := make([][]int, m)
	for i := range dp {
		dp[i] = make([]int, n)
	}
	// base case
	dp[0][0] = 1

	for i := range m {
		for j := range n {
			// 上+左
			if i > 0 {
				dp[i][j] += dp[i-1][j]
			}
			if j > 0 {
				dp[i][j] += dp[i][j-1]
			}
		}
	}

	return dp[m-1][n-1]
}
