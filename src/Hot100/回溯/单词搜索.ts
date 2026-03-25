/**
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成
 * 其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 */

// DFS
function exist(board: string[][], word: string): boolean {
  const m = board.length, n = board[0].length

  let flag = false
  const visited: boolean[][] = Array.from({ length: m }, () => new Array(n).fill(false))

  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  // 当前要匹配word[index]
  const dfs = (row: number, col: number, index: number) => {
    if (index === word.length) {
      flag = true
      return
    }

    if (flag) {
      return
    }

    for (const dir of dirs) {
      const newRow = row + dir[0]
      const newCol = col + dir[1]

      // 越界
      if (newRow < 0 || newRow >= m || newCol < 0 || newCol >= n) {
        continue
      }
      // 访问过了
      if (visited[newRow][newCol]) {
        continue
      }

      // 不等于
      if (board[newRow][newCol] !== word[index]) {
        continue
      }

      visited[newRow][newCol] = true
      dfs(newRow, newCol, index + 1)
      visited[newRow][newCol] = false
    }

  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        visited[i][j] = true
        dfs(i, j, 1)
        visited[i][j] = false
        if (flag) {
          return true
        }
      }
    }
  }

  return false
};