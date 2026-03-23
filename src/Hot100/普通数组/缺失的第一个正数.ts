/**
 * 给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。
 */

function firstMissingPositive(nums: number[]): number {
  const n = nums.length
  // 首先这个缺少的数肯定在 [1, n+1]
  // 当[1,n]都在的时候取n+1
  for (let i = 0; i < nums.length; i++) {
    // 首先都在范围内 其次前面没排过你（去重）
    // 其次 就是说 nums[i] 应该放在 nums[i]-1（index）的位置
    // 但是如果 nums[i]-1 位置已经是 nums[i] 了 就说明之前已经弄过了 nums[i] 这个数
    // 所以用 nums[i] !== nums[nums[i]-1] 来判断
    while (1 <= nums[i] && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      // swap
      const j = nums[i] - 1;
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
  }

  // 看谁不在
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }

  // [1,n]都在了，那就是n+1缺
  return n + 1
};