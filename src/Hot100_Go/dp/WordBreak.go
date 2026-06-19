package dp

func wordBreak(s string, wordDict []string) bool {
	n := len(s)

	maxLen := 0
	words := map[string]bool{}
	for _, word := range wordDict {
		words[word] = true
		maxLen = max(maxLen, len(word))
	}
	// dp: s[...i] 能不能被拼成
	dp := make([]bool, n+1)
	// base case
	dp[0] = true

	for i := 1; i <= n; i++ {
		for j := i - 1; j >= max(i-maxLen, 0); j-- {
			if dp[j] && words[s[j:i]] {
				dp[i] = true
			}
		}
	}

	return dp[n]
}
