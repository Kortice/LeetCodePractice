package multidp

func minDistance(word1 string, word2 string) int {
	m, n := len(word1), len(word2)

	// dp: word1[0...i] 与 word2[0...j] 的编辑距离为 dp[i][j]
	dp := make([][]int, m+1)
	for i := range dp {
		dp[i] = make([]int, n+1)
	}

	// base case
	for i := range m + 1 {
		dp[i][0] = i
	}
	for j := range n + 1 {
		dp[0][j] = j
	}

	for i := 1; i < m+1; i++ {
		for j := 1; j < n+1; j++ {
			// 相等就跳过
			if word1[i-1] == word2[j-1] {
				dp[i][j] = dp[i-1][j-1]
			} else {
				dp[i][j] = min(
					dp[i][j-1],   // 插入
					dp[i-1][j],   // 删除
					dp[i-1][j-1], // 替换
				) + 1
			}
		}
	}

	return dp[m][n]
}
