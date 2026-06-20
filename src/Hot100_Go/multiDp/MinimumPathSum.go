package multidp

func minPathSum(grid [][]int) int {
	m, n := len(grid), len(grid[0])
	// dp: 到 grid[i][j] 最小路径和为 dp[i][j]
	dp := make([][]int, m)
	for i := range dp {
		dp[i] = make([]int, n)
	}
	// base case
	dp[0][0] = grid[0][0]

	for i := range m {
		for j := range n {
			dp[i][j] = grid[i][j]
			// min(左,上) + value
			if i > 0 && j > 0 {
				dp[i][j] += min(dp[i-1][j], dp[i][j-1])
			} else {
				if i > 0 {
					dp[i][j] += dp[i-1][j]
				}
				if j > 0 {
					dp[i][j] += dp[i][j-1]
				}
			}
		}
	}

	return dp[m-1][n-1]
}
