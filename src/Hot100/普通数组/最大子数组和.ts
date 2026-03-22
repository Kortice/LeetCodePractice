/**
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组是数组中的一个连续部分。
 */

function maxSubArray(nums: number[]): number {
  const n = nums.length

  // dp 定义：以nums[i]为结尾的连续子数组的最大和
  const dp: (number | null)[] = new Array(n).fill(null)
  dp[0] = nums[0]

  for (let i = 1; i < n; i++) {
    // nums[i]可以选择加入或者另开
    dp[i] = Math.max(dp[i - 1]! + nums[i], nums[i])
  }

  let res = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < n; i++) {
    res = Math.max(res, dp[i]!)
  }

  return res
}