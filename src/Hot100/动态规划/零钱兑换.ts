/**
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 * 
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1 。
 * 
 * 你可以认为每种硬币的数量是无限的。
 */

function coinChange(coins: number[], amount: number): number {
  // dp数组定义：dp[i]代表amount为i的时候需要的最少硬币个数
  const dp = new Array(amount + 1).fill(10001)
  // base case
  dp[0] = 0
  for (let i = 1; i < amount + 1; i++) {
    // 状态转移
    for (const coin of coins) {
      const pre = i - coin
      if (pre >= 0) {
        dp[i] = Math.min(dp[i], dp[pre] + 1)
      }
    }
  }

  return dp[amount] === 10001 ? -1 : dp[amount]
};