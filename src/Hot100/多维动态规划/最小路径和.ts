/**
 * 给定一个包含非负整数的 m x n 网格 grid 
 * 请找出一条从左上角到右下角的路径
 * 使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 */

function minPathSum(grid: number[][]): number {
  const m = grid.length, n = grid[0].length
  // dp[i][j]：[0][0] -> [i][j] 的最小路径和
  const dp = Array.from(grid)
  // base case dp[0][0] = grid[0][0]

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue
      }
      // 上
      const up = i - 1 >= 0 ? dp[i - 1][j] : Infinity
      // 左
      const left = j - 1 >= 0 ? dp[i][j - 1] : Infinity

      dp[i][j] = Math.min(up, left) + grid[i][j]
    }
  }

  return dp[m - 1][n - 1]
};