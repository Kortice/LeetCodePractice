/**
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length, n = matrix[0].length

  let up = 0, down = m - 1, left = 0, right = n - 1

  const res: number[] = []

  while (res.length < m * n) {
    // 上面从左到右
    if (left <= right && up <= down) {
      for (let i = left; i <= right; i++) {
        res.push(matrix[up][i])
      }
      up++
    }

    // 右侧从上到下
    if (left <= right && up <= down) {
      for (let i = up; i <= down; i++) {
        res.push(matrix[i][right])
      }
      right--
    }

    // 下面从右到左
    if (left <= right && up <= down) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[down][i])
      }
      down--
    }

    // 左侧从下到上
    if (left <= right && up <= down) {
      for (let i = down; i >= up; i--) {
        res.push(matrix[i][left])
      }
      left++
    }
  }

  return res
};