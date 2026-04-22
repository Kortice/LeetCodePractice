/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

function majorityElement(nums: number[]): number {
  let hp = 0
  let ans = -1
  for (const num of nums) {
    if (hp === 0) {
      [ans, hp] = [num, 1]
    } else if (ans === num) {
      hp++
    } else {
      hp--
    }
  }

  return ans
};