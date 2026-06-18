package dp

import "math"

func numSquares(n int) int {
	// dp: 和为 i 的完全平方数的最少数量为 dp[i]
	dp := make([]int, n+1)
	// base case
	dp[0] = 0
	dp[1] = 1

	for i := 2; i <= n; i++ {
		dp[i] = math.MaxInt
		// dp[i] = min(dp[i], dp[i-x*x]+1)
		iSqrt := int(math.Floor(math.Sqrt(float64(i))))
		for j := iSqrt; j >= 1; j-- {
			dp[i] = min(dp[i], dp[i-j*j]+1)
		}
	}

	return dp[n]
}
