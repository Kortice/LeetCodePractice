/**
 * 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 */

// function rob(nums: number[]): number {
//   const n = nums.length
//   // dp数组定义: dp[i]表示到第i房屋时能偷窃的最高金额
//   const dp = new Array(n + 1)
//   // base case
//   dp[0] = 0
//   dp[1] = nums[0]

//   let frontMax = dp[0]
//   let res = dp[1]
//   // 状态转移
//   for (let i = 2; i < n + 1; i++) {
//     // 当前这个房间的最高金额 = 前面最高能偷到的最高金额 + 当前房间的金额
//     dp[i] = frontMax + nums[i - 1]
//     frontMax = Math.max(frontMax, res)
//     res = Math.max(res, dp[i])
//   }

//   return res
// };

function rob(nums: number[]): number {
  const n = nums.length
  // dp定义 dp[i] => 到第i家能偷到的最高金额 [0...i]
  const dp = new Array(n + 1)

  // base case
  dp[0] = 0
  dp[1] = nums[0]

  for (let i = 2; i < n + 1; i++) {
    // 选择
    // 1. 不偷 => 等于dp[i-1]
    // 2. 偷 => 等于前一个dp[i-2] + nums[i-1]
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }

  // 肯定到最后偷的多
  return dp[n]
};