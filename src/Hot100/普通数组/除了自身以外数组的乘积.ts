/**
 * 给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除了 nums[i] 之外其余各元素的乘积 。
 */


// 使用前缀积的技巧
function productExceptSelf(nums: number[]): number[] {
  const n = nums.length

  // 前缀积
  // prefix[i] = nums[0...i]的元素积
  const prefix = new Array(n)
  prefix[0] = nums[0]
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i]
  }

  // 后缀积
  // suffix[i] = nums[i...n-1]的元素积
  const suffix = new Array(n)
  suffix[n - 1] = nums[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i]
  }

  const res: number[] = []
  res[0] = suffix[1]
  res[n - 1] = prefix[n - 2]
  for (let i = 1; i < n - 1; i++) {
    res[i] = prefix[i - 1] * suffix[i + 1]
  }

  return res
};