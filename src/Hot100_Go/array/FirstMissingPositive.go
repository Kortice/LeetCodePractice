package array

func firstMissingPositive(nums []int) int {
	n := len(nums)
	for i := range n {
		for 1 <= nums[i] && nums[i] <= n && nums[nums[i]-1] != nums[i] {
			j := nums[i] - 1
			nums[i], nums[j] = nums[j], nums[i]
		}
	}

	for i := range n {
		if nums[i] != i+1 {
			return i + 1
		}
	}

	return n + 1
}

// 空间复杂度不符合题意
// func firstMissingPositive(nums []int) int {
// 	n := len(nums)
// 	m := make([]int, n+1) // map: idx -> val (idx should equal val)

// 	// idx 0 1 2 ... n-1
// 	// val 0 1 2 ... n-1
// 	// 因为不在的最小正整数肯定出现在 0~len(nums) 之间

// 	for _, num := range nums {
// 		if num > 0 && num <= n {
// 			m[num] = num
// 		}
// 	}

// 	for i, num := range m {
// 		if num != i {
// 			return i
// 		}
// 	}

// 	return n + 1
// }
