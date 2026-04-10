/**
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
 * 
 * 你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。
 * 
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。
 */

// 我的解法
// function maxProfit(prices: number[]): number {
//   const n = prices.length
//   // 记录[i...]的最大值
//   const toEndMax = new Array(n)
//   let curMax = prices[n - 1]
//   for (let i = n - 1; i >= 0; i--) {
//     curMax = Math.max(curMax, prices[i])
//     toEndMax[i] = curMax
//   }

//   // 计算最大利润
//   let res = 0
//   for (let i = 0; i < n; i++) {
//     res = Math.max(res, toEndMax[i] - prices[i])
//   }

//   return res
// };

// 但是时间复杂度都是O(n)吧

// 大佬解法
function maxProfit(prices: number[]): number {
  let cost = Number.MAX_SAFE_INTEGER, profit = 0
  
  for (const price of prices) {
    // 更新最低成本
    cost = Math.min(cost, price)
    // 更新最高利润
    profit = Math.max(profit, price - cost)
  }

  return profit
};