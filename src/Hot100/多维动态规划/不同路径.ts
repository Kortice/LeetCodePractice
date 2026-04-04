/**
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
 * 
 * 问总共有多少条不同的路径？
 */

function uniquePaths(m: number, n: number): number {
  // dp[i][j]：到[i][j]有多少条路径
  const dp = Array.from({ length: m }, () => new Array(n))
  // base case
  dp[0][0] = 1

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // base case
      if (i === 0 && j === 0) {
        continue
      }
      // 当前 = 上 + 左
      const up = (i - 1) >= 0 ? dp[i - 1][j] : 0
      const left = (j - 1) >= 0 ? dp[i][j - 1] : 0
      dp[i][j] = up + left
    }
  }

  return dp[m - 1][n - 1]
};