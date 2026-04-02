/**
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 */

function canPartition(nums: number[]): boolean {
  const n = nums.length
  let sum = 0
  for (const num of nums) sum += num
  // 奇数
  if (sum % 2 !== 0) return false
  const target = sum / 2

  const memo: (boolean | null)[][] = Array.from({ length: n + 1 }, () => new Array(target + 1).fill(null))

  // dp定义：对于前i个物品，容量为target，有办法可以全部装满
  const dp = (i: number, target: number): boolean => {
    // base case
    if (target === 0) return true
    if (i === 0) return false

    if (memo[i][target] !== null) {
      return memo[i][target]
    }

    // 状态转移
    if (target < nums[i - 1]) { // 容不下新的这个
      memo[i][target] = dp(i - 1, target)
    } else { // 容得下
      // 装或不装
      memo[i][target] = dp(i - 1, target - nums[i - 1]) || dp(i - 1, target)
    }

    return memo[i][target]
  }

  return dp(n, target)
};