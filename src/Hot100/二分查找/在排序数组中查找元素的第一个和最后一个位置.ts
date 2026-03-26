/**
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 */

function searchRange(nums: number[], target: number): number[] {
  const leftBound = findLeftBound(nums, target)
  const rightBound = findRightBound(nums, target)

  return [leftBound, rightBound]
};

function findLeftBound(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }

  return nums[left] === target ? left : -1
}

function findRightBound(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      left = mid + 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }

  return nums[right] === target ? right : -1
}