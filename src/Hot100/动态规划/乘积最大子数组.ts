/**
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 */

function maxProduct(nums: number[]): number {
  const n = nums.length
  // max定义：dp[i]代表着以i为结尾的乘积最大子数组
  // 默认是自己
  const max = Array.from(nums)
  // min定义：dp[i]代表着以i为结尾的乘积最小子数组
  // 默认是自己
  const min = Array.from(nums)
  // base case
  // max[0] = nums[0]
  // min[0] = nums[0]
  let res = nums[0]
  // 状态转移
  for (let i = 1; i < n; i++) {
    max[i] = Math.max(nums[i], nums[i] * max[i - 1], nums[i] * min[i - 1])
    min[i] = Math.min(nums[i], nums[i] * max[i - 1], nums[i] * min[i - 1])
    res = Math.max(max[i], res)
  }

  return res
}