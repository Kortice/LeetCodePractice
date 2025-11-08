/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 */

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()
  const res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i]
    if (map.has(target - value)) { // 这里就可以保证不会和自己匹配了
      res.push(i, map.get(target - value)!)
      break
    }
    map.set(value, i)
  }

  return res
}

// O(n^2)
// function twoSum(nums: number[], target: number): number[] {
//     let res: number[] = []

//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i+1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           res.push(i, j)
//           break;
//         }
//       }
//     }

//     return res
// };