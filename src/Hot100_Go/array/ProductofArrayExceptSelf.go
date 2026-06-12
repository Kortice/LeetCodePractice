package array

func productExceptSelf(nums []int) []int {
	// 前缀积 后缀积
	prefix, suffix := make([]int, len(nums)), make([]int, len(nums))
	prefix[0] = 1
	suffix[len(nums)-1] = 1

	for i := 1; i < len(nums); i++ {
		prefix[i] = prefix[i-1] * nums[i-1]
	}

	for i := len(nums) - 2; i >= 0; i-- {
		suffix[i] = suffix[i+1] * nums[i+1]
	}

	res := make([]int, len(nums))

	for i := range res {
		res[i] = prefix[i] * suffix[i]
	}

	return res
}

// [1, 2, 3, 4]

// [1, 1, 2, 6]

// [24, 12, 4, 1]
