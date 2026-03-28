/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 */

// function climbStairs(n: number): number {
//   // dp数组定义：dp[i]表示到i阶有dp[i]种方法
//   const dp: number[] = []
//   // base case
//   dp[0] = 1
//   dp[1] = 1

//   // 状态转移
//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2]
//   }

//   return dp[n]
// };

// 优化
function climbStairs(n: number): number {
  // base case
  if (n === 1) {
    return 1
  }

  let dp: number = 0
  let dp_i_1 = 1 // dp[0]
  let dp_i_2 = 1 // dp[1]
  for (let i = 2; i <= n; i++) {
    dp = dp_i_1 + dp_i_2
    dp_i_2 = dp_i_1
    dp_i_1 = dp
  }

  return dp
};