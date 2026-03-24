/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
 * 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
 * 此外，你可以假设该网格的四条边均被水包围。
 */

function numIslands(grid: string[][]): number {
  const m = grid.length, n = grid[0].length
  let count = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 发现陆地
      if (grid[i][j] === '1') {
        bfs(grid, i, j)
        count++
      }
    }
  }

  return count
};

function bfs(grid: string[][], i: number, j: number): void {
  const m = grid.length, n = grid[0].length
  // base case
  if (i < 0 || i >= m || j < 0 || j >= n) {
    return
  }

  // 如果是水
  if (grid[i][j] === '0') {
    return
  }

  // 那么就是陆地
  // 给他淹了！
  grid[i][j] = '0'

  // 周围是陆地的都淹了

  // 上
  bfs(grid, i - 1, j)
  // 下
  bfs(grid, i + 1, j)
  // 左
  bfs(grid, i, j - 1)
  // 右
  bfs(grid, i, j + 1)
}