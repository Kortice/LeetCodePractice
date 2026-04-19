/**
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 */

function trap(height: number[]): number {
  let res = 0

  const n = height.length

  const left_max = new Array(n)
  const right_max = new Array(n)

  // base case
  left_max[0] = height[0]
  right_max[n - 1] = height[n - 1]

  for (let i = 1; i < n; i++) {
    left_max[i] = Math.max(height[i], left_max[i - 1])
  }

  for (let i = n - 2; i >= 0; i--) {
    right_max[i] = Math.max(height[i], right_max[i + 1])
  }

  for (let i = 0; i < n; i++) {
    res += Math.min(left_max[i], right_max[i]) - height[i]
  }

  return res
};