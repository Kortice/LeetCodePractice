/**
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */

function rotate(nums: number[], k: number): void {
  const n = nums.length
  // 1. 先整体翻转
  reverse(nums, 0, n - 1)
  // 2. 翻转前k个
  k = k % n
  reverse(nums, 0, k - 1)
  // 3. 翻转后n-k个
  reverse(nums, k, n - 1)

};

// 翻转arr中的[i,j]区间
function reverse(arr: number[], i: number, j: number): void {
  while (i <= j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++
    j--
  }
}