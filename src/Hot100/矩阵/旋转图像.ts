/**
 * 给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 */

function rotate(matrix: number[][]): void {
  for (const nums of matrix) {
    reverse(nums)
  }

  swap(matrix)
};

// 翻转数组
function reverse(nums: number[]): void {
  let i = 0, j = nums.length - 1

  while (i <= j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
    i++
    j--
  }
}

// 对角线互换
function swap(matrix: number[][]): void {
  const n = matrix.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      [matrix[i][j], matrix[n - 1 - j][n - 1 - i]] = [matrix[n - 1 - j][n - 1 - i], matrix[i][j]]
    }
  }
}