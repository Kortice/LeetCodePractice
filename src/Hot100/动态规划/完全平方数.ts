/**
 * 给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。
 */

function numSquares(n: number): number {
  // dp数组定义：dp[i] => 和为i的完全平方数的最少数量
  // 初始化为自己 => 相当于用 i 个 1 构成自己
  const dp: number[] = Array.from({ length: n + 1 }, (_, index) => index)

  // base case dp[0] = 0

  // 状态转移
  for (let i = 1; i < n + 1; i++) {
    let step = 1
    let j = i - step * step
    while (j >= 0) {
      dp[i] = Math.min(dp[i], dp[j] + 1)
      step++
      j = i - step * step
    }
  }

  return dp[n]
};