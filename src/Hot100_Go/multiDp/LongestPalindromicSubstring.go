package multidp

// #region dp
// func longestPalindrome(s string) string {
// 	n := len(s)
// 	// dp: s[i...j]中最长的回文子串为dp[i][j]
// 	dp := make([][]string, n)
// 	for i := range n {
// 		dp[i] = make([]string, n)
// 	}

// 	// base case
// 	for i := range n {
// 		dp[i][i] = string(s[i])
// 	}

// 	for i := n - 1; i >= 0; i-- {
// 		for j := i + 1; j < n; j++ {
// 			if s[i] == s[j] && len(dp[i+1][j-1]) == j-i-1 {
// 				dp[i][j] = s[i : j+1]
// 			} else {
// 				// dp[i][j] = max(dp[i+1][j] ,dp[i][j-1])
// 				if len(dp[i+1][j]) > len(dp[i][j-1]) {
// 					dp[i][j] = dp[i+1][j]
// 				} else {
// 					dp[i][j] = dp[i][j-1]
// 				}
// 			}
// 		}
// 	}

// 	return dp[0][n-1]
// }

// #endregion

// #region two pointers
func longestPalindrome(s string) string {
	var res string

	for i := range s {
		str1 := palindrome(s, i, i)
		str2 := palindrome(s, i, i+1)

		if len(str1) > len(res) {
			res = str1
		}

		if len(str2) > len(res) {
			res = str2
		}
	}

	return res
}

func palindrome(s string, i, j int) string {
	for ; i >= 0 && j < len(s) && s[i] == s[j]; i, j = i-1, j+1 {
	}

	return s[i+1 : j]
}

// #endregion
