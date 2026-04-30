/**
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 * 
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 * 
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 * 
 * 必须 原地 修改，只允许使用额外常数空间。
 */

function nextPermutation(nums: number[]): void {
  const n = nums.length

  // 1. 从右往左找第一个小于右侧相邻数的数
  let i = n - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }

  // 2. 如果存在
  if (i >= 0) {
    // 右边找比nums[i]大的最小数
    let p = i + 1
    while (p < n && nums[p] > nums[i]) {
      p++
    }
    p--

    // swap
    swap(nums, p, i)

    // 3. reverse
    reverse(nums, i + 1, n - 1)
  } else {
    // 否则当前的就是最大的排列
    reverse(nums, 0, n - 1)
  }
};

function swap(nums: number[], left: number, right: number) {
  [nums[left], nums[right]] = [nums[right], nums[left]]
}

function reverse(nums: number[], left: number, right: number) {
  while (left <= right) {
    swap(nums, left, right)
    left++
    right--
  }
}
