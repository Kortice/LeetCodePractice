/**
 * 给定一个长度为 n 的 0 索引整数数组 nums。初始位置在下标 0。
 * 
 * 每个元素 nums[i] 表示从索引 i 向后跳转的最大长度。换句话说，如果你在索引 i 处，你可以跳转到任意 (i + j) 处：
 * 0 <= j <= nums[i] 且
 * i + j < n
 * 
 * 返回到达 n - 1 的最小跳跃次数。测试用例保证可以到达 n - 1。
 */

function jump(nums: number[]): number {
  const n = nums.length

  if (n <= 1) {
    return 0
  }

  let end = 0, farthest = 0, steps = 0
  for (let i = 0; i < n; i++) {
    farthest = Math.max(farthest, nums[i] + i)
    if (i === end) {
      end = farthest
      steps++

      if (end >= n - 1) {
        return steps
      }
    }
  }

  return -1
};