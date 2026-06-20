package multidp

func longestCommonSubsequence(text1 string, text2 string) int {
	m, n := len(text1), len(text2)
	// dp: dp[i][j] 为 text1[0...i] text2[0...j] 的最长公共子序列长度
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}
	// base case
	// dp[0][...] = 0 && dp[...][0] = 0

	for i := 1; i < m+1; i++ {
		for j := 1; j < n+1; j++ {
			if text1[i-1] == text2[j-1] {
				dp[i][j] = dp[i-1][j-1] + 1
			} else {
				dp[i][j] = max(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])
			}
		}
	}

	return dp[m][n]
}
