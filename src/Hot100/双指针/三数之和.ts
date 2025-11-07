/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 */

function threeSum(nums: number[]): number[][] {
  // 排序一下 从小到大
  nums.sort((a, b) => a - b)

  const res: number[][] = []
  // 穷举
  for (let i = 0; i < nums.length; i++) {
    const tuples = twoSum(nums, i + 1, 0 - nums[i])
    for (let tuple of tuples) {
      tuple.push(nums[i])
      res.push(tuple)
    }
    // 去重
    while (i < nums.length && nums[i + 1] === nums[i]) i++
  }

  return res
}

// 返回 nums(有序) 中和为 target 的两个数的组合
function twoSum(nums: number[], start: number, target: number): number[][] {
  let lo = start, hi = nums.length - 1
  const res: number[][] = []

  while (lo < hi) {
    const left = nums[lo], right = nums[hi]
    let sum = left + right
    if (sum > target) {
      while (lo < hi && nums[hi] === right) hi--
    } else if (sum < target) {
      while (lo < hi && nums[lo] === left) lo++
    } else {
      res.push([nums[lo], nums[hi]])
      while (lo < hi && nums[hi] === right) hi--
      while (lo < hi && nums[lo] === left) lo++
    }
  }

  return res
}