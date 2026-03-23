/**
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
 * 
 * 每行的元素从左到右升序排列。
 * 每列的元素从上到下升序排列。
 */

// 算法：
// 从右上角开始遍历 => 右上角 向左变小 向下变大 => 二分
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length, n = matrix[0].length

  let i = 0, j = n - 1
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true
    } else if (matrix[i][j] < target) {
      // 小了
      i++
    } else if (matrix[i][j] > target) {
      // 大了
      j--
    }
  }

  return false
};