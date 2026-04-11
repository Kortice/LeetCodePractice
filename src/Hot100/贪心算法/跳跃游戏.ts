/**
 * 给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。
 */

function canJump(nums: number[]): boolean {
  const end = nums.length
  let jumpMax = nums[0]
  if (jumpMax >= end - 1) {
    return true
  }
  for (let i = 1; i <= jumpMax; i++) {
    jumpMax = Math.max(jumpMax, nums[i] + i)
    if (jumpMax >= end - 1) {
      return true
    }
  }

  return false
};