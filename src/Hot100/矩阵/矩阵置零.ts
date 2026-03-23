/**
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。
 */

// function setZeroes(matrix: number[][]): void {
//   const m = matrix.length, n = matrix[0].length

//   // 记录0的行和列(i&j)
//   let zeroRecord: number[][] = []
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === 0) {
//         zeroRecord.push([i, j])
//       }
//     }
//   }

//   // 设置0
//   for (const [row, col] of zeroRecord) {
//     for (let i = 0; i < n; i++) {
//       matrix[row][i] = 0
//     }
//     for (let i = 0; i < m; i++) {
//       matrix[i][col] = 0
//     }
//   }
// };

// 空间复杂度O(1)解法
function setZeroes(matrix: number[][]): void {
  const m = matrix.length, n = matrix[0].length
  // 记录第一行第一列存不存在0
  const firstRowHasZero = matrix[0].includes(0)
  const firstColHasZero = matrix.some(row => row[0] === 0)

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0
        matrix[0][j] = 0
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if (firstRowHasZero) {
    for (let j=0; j<n; j++) {
      matrix[0][j] = 0
    }
  }

  if (firstColHasZero) {
    for (let i=0; i<m; i++) {
      matrix[i][0] = 0
    }
  }
};