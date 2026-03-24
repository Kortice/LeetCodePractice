/**
 * 在给定的 m x n 网格 grid 中，每个单元格可以有以下三个值之一：
 * 
 * 值 0 代表空单元格；
 * 值 1 代表新鲜橘子；
 * 值 2 代表腐烂的橘子。
 * 每分钟，腐烂的橘子 周围 4 个方向上相邻 的新鲜橘子都会腐烂。
 * 
 * 返回 直到单元格中没有新鲜橘子为止所必须经过的最小分钟数。如果不可能，返回 -1 。
 */

// BFS算法
function orangesRotting(grid: number[][]): number {
  const m = grid.length, n = grid[0].length

  // 记录烂了没
  const visited = Array.from({ length: m }, () => new Array(n).fill(false))
  const q: number[][] = []

  let freshCount = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        freshCount++
      } else if (grid[i][j] === 2) {
        q.push([i, j])
        visited[i][j] = true
      }
    }
  }

  // 早就烂完了！
  if (freshCount === 0) {
    return 0
  }

  let minutes = 0
  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  while (q.length > 0) {
    const sz = q.length
    for (let i = 0; i < sz; i++) {
      const [row, col] = q.shift()!
      for (const dir of dirs) {
        const newRow = row + dir[0]
        const newCol = col + dir[1]
        // base case
        if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) {
          continue
        }

        // 是空格 或者 烂过了
        if (grid[newRow][newCol] === 0 || visited[newRow][newCol]) {
          continue
        }

        q.push([newRow, newCol])
        grid[newRow][newCol] = 2
        visited[newRow][newCol] = true
        freshCount--
      }
    }
    minutes++
  }

  return freshCount === 0 ? minutes - 1 : -1
};