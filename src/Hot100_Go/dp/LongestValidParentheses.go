package dp

import "slices"

func longestValidParentheses(s string) int {
	n := len(s)
	if n == 0 {
		return 0
	}
	// dp: 以s[i]结尾的最长有效括号子串的长度
	dp := make([]int, n)
	// base case
	dp[0] = 0

	for i := 1; i < n; i++ {
		// ( 为结尾肯定是0
		// 所以只考虑 )
		if s[i] == ')' {
			preIndex := i - dp[i-1] - 1
			if preIndex >= 0 && s[preIndex] == '(' {
				dp[i] = dp[i-1] + 2

				// 继续拼接前面的
				if preIndex > 0 {
					dp[i] += dp[preIndex-1]
				}
			}
		}
	}

	return slices.Max(dp)
}
