package dp

func coinChange(coins []int, amount int) int {
	// dp: i 块钱最少需要 dp[i] 个硬币
	dp := make([]int, amount+1)

	for i := 1; i <= amount; i++ {
		dp[i] = amount + 1
	}

	// base case
	dp[0] = 0

	for i := 1; i <= amount; i++ {
		for _, coin := range coins {
			if i-coin >= 0 {
				dp[i] = min(dp[i], dp[i-coin]+1)
			}
		}
	}

	if dp[amount] > amount {
		return -1
	}

	return dp[amount]
}
