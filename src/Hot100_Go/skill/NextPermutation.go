package skill

import "slices"

func nextPermutation(nums []int) {
	n := len(nums)

	// 从右往左找第一个递减的数
	// （应该是递增的）
	i := n - 2
	for i >= 0 && nums[i+1] <= nums[i] {
		i--
	}

	if i >= 0 {
		j := n - 1

		// 从右往左找第一个大于 nums[i] 的数
		for nums[j] <= nums[i] {
			j--
		}

		// swap
		nums[i], nums[j] = nums[j], nums[i]
	}

	// 反转 i 后面的数
	slices.Reverse(nums[i+1:])
}
