package greedy

// #region 单调栈思路
// func maxProfit(prices []int) int {
// 	// 维护单调栈
// 	// 当前以后的最多的价格为 stk[last]
// 	var stk []int
// 	for i := len(prices) - 1; i >= 0; i-- {
// 		if len(stk) == 0 || stk[len(stk)-1] <= prices[i] {
// 			stk = append(stk, prices[i])
// 		}
// 	}

// 	res := 0

// 	for _, price := range prices {
// 		res = max(res, stk[len(stk)-1]-price)
// 		// 如果当前这个就是最大的，弹栈
// 		if stk[len(stk)-1] == price {
// 			stk = stk[:len(stk)-1]
// 		}
// 	}

// 	return res
// }

// #endregion

// #region 贪心
func maxProfit(prices []int) int {
	// 当前最大利润 = 当前price - 前面最小的
	minPrice := prices[0]
	res := 0
	for _, price := range prices {
		res = max(res, price-minPrice)
		minPrice = min(minPrice, price)
	}
	return res
}

// #endregion
