/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 */

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums) // 数组去重

  let maxLen = 0

  for (const num of set) {
    if (!set.has(num - 1)) { // 如果 num-1 存在 那么 num 就不是起点 所以 num-1 不存在 num 就是起点
      let count = 1
      let curNum = num
      while (set.has(curNum + 1)) { // 如果 num+1 存在 就可以继续计数
        count++
        curNum++
      }

      maxLen = count > maxLen ? count : maxLen
    }
  }

  return maxLen
}


// O(nlogn) 因为用了sort
// function longestConsecutive(nums: number[]): number {

//   const map = new Map<number, boolean>()

//   // 对 nums 去重
//   for (let num of nums) {
//     if (!map.has(num)) {
//       map.set(num, true)
//     }
//   }

//   // 对去重后的数据排序
//   const datas = Array.from(map.keys()).sort((a, b) => a - b)

//   let iL = 0
//   let iR = 1
//   let count = 1, maxCount = count
//   while (1) {
//     if (datas[iR] !== datas[iL] + 1) {
//       if (count > maxCount) {
//         maxCount = count
//       }
//       count = 0
//     }

//     if (iR === datas.length)
//       break

//     count++

//     iL++
//     iR++
//   }

//   return maxCount
// }