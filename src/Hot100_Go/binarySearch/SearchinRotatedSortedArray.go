package binarysearch

func search(nums []int, target int) int {
	last := len(nums) - 1

	lo, hi := 0, last
	for lo <= hi {
		mid := lo + (hi-lo)/2
		if nums[mid] == target {
			return mid
		}

		// 分类讨论：
		// target nums[mid] 在不在一个半段

		// target 在左半段
		if target > nums[last] {
			// mid 在右半段
			if nums[mid] < nums[last] {
				hi = mid - 1
				continue
			}
			// target 在右半段
		} else {
			// mid 在左半段
			if nums[mid] > nums[last] {
				lo = mid + 1
				continue
			}
		}

		// target 和 mid 在同一个半段
		if nums[mid] > target {
			hi = mid - 1
		} else {
			lo = mid + 1
		}
	}

	return -1
}
