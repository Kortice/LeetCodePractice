/**
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 * 
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 向左旋转
 * 使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。
 * 例如， [0,1,2,4,5,6,7] 下标 3 上向左旋转后可能变为 [4,5,6,7,0,1,2] 。
 * 
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 * 
 * 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
 */

// 二次二分
// function search(nums: number[], target: number): number {
//   const n = nums.length

//   let left = 0, right = n - 1
//   while (left < right) {
//     const mid = left + Math.floor((right - left) / 2)
//     if (nums[mid] > nums[right]) {
//       left = mid + 1
//     } else {
//       right = mid
//     }
//   }

//   // 此时left就是旋转点
//   right = left - 1

//   // [left, n-1]找 [0, right]找

//   const findLeft = find(nums, left, n - 1, target)
//   if (findLeft !== -1) {
//     return findLeft
//   }
//   const findRight = find(nums, 0, right, target)
//   if (findRight !== -1) {
//     return findRight
//   }

//   return -1
// };

// function find(nums: number[], l: number, r: number, target: number): number {
//   while (l <= r) {
//     const m = l + Math.floor((r - l) / 2)
//     if (nums[m] === target) {
//       return m
//     } else if (nums[m] < target) {
//       l = m + 1
//     } else if (nums[m] > target) {
//       r = m - 1
//     }
//   }

//   return -1
// }

// 一次二分
function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    // 根据题意，mid有一侧肯定是有序的

    // base case
    if (nums[mid] === target) {
      return mid
    }

    // 如果左侧是有序的
    if (nums[mid] >= nums[left]) { // 当相等的时候 => 也就是只有left一个元素的时候 => 一个元素当然认为是有序的
      // 如果target在左侧
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else { // 否则去右侧找
        left = mid + 1
      }
    } else { // 右侧是有序的
      // 如果target在右侧
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else { // 否则去左侧找
        right = mid - 1
      }
    }
  }

  // 没找到
  return -1
};