/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 */

function generate(numRows: number): number[][] {
  const res: number[][] = Array.from({ length: numRows }, () => [])

  // base case
  res[0].push(1)

  for (let i = 1; i < numRows; i++) {
    for (let j = 0; j < i + 1; j++) {
      // 左上角
      const leftTop = j === 0 ? 0 : res[i - 1][j - 1]
      // 右上角
      const rightTop = j === i ? 0 : res[i - 1][j]
      // 计算值
      res[i].push(leftTop + rightTop)
    }
  }

  return res
};