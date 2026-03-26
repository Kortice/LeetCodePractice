/**
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。
 * 
 * n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 
 * 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。
 * 
 * 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */

function solveNQueens(n: number): string[][] {
  // 结果数组
  const res: string[][] = []
  // 初始化一下棋盘
  const grid: string[] = new Array(n).fill(".".repeat(n))

  // 当前row行进行选择
  const backtrack = (row: number) => {
    if (row === n) {
      res.push([...grid])
    }

    // 行内选择
    for (let col = 0; col < n; col++) {
      // 如果这个格子不行
      if (!check(grid, row, col)) {
        continue
      }
      // 选择
      const temp = [...grid[row]]
      temp[col] = 'Q'
      grid[row] = temp.join("")

      backtrack(row + 1)

      // 撤销选择
      temp[col] = '.'
      grid[row] = temp.join("")
    }
  }

  backtrack(0)

  return res
};

// check [row][col] 能不能放皇后
function check(grid: string[], row: number, col: number): boolean {
  const n = grid.length
  // 行上面已经保证了 不用检查
  // 检查列
  for (let i = 0; i < n; i++) {
    if (grid[i][col] === 'Q') {
      return false
    }
  }
  // 检查斜 因为从上到下放置的 所以检查 左上 和 右上 就行
  // 检查左上
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (grid[i][j] === 'Q') {
      return false
    }
  }
  // 检查右上
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (grid[i][j] === 'Q') {
      return false
    }
  }

  // 通过检查
  return true
}