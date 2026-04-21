/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

function majorityElement(nums: number[]): number {
  const map = new Map<number, number>()
  const n = nums.length
  const target = Math.floor(n / 2)

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
    if (map.get(num) as number > target) {
      return num
    }
  }

  return -1
};