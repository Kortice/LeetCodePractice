package dp

func maxProduct(nums []int) int {
	n := len(nums)

	// 因为有负数
	// 所以加一个minDp来处理

	// maxDp: 以 nums[i] 结尾的子数组的最大乘积为 maxDp[i]
	maxDp := make([]int, n)
	// minDp: 以 nums[i] 结尾的子数组的最小乘积为 minDp[i]
	minDp := make([]int, n)

	// base case
	// dp[i] = nums[i]
	copy(maxDp, nums)
	copy(minDp, nums)

	res := maxDp[0]

	for i := 1; i < n; i++ {
		maxDp[i] = max(maxDp[i], maxDp[i-1]*nums[i], minDp[i-1]*nums[i])
		minDp[i] = min(minDp[i], minDp[i-1]*nums[i], maxDp[i-1]*nums[i])
		res = max(res, maxDp[i])
	}

	return res
}
