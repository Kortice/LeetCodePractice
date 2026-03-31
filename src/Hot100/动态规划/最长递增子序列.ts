/**
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 */

function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  // dp定义：dp[i] => 以i为结尾的最长递增子序列的长度 
  const dp: number[] = new Array(n).fill(1)
  // base case
  dp[0] = 1

  // 状态转移
  for (let i = 1; i < n; i++) {
    // 找前面严格比自己小的
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
  }

  let res = 1
  for (const len of dp) {
    res = Math.max(res, len)
  }

  return res
};