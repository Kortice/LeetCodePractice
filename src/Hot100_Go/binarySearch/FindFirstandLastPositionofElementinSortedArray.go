package binarysearch

func searchRange(nums []int, target int) []int {
	var res []int

	res = append(res, leftRange(nums, target))
	res = append(res, rightRange(nums, target))

	return res
}

func leftRange(nums []int, target int) int {

	lo, hi := 0, len(nums)-1

	for lo <= hi {
		mid := lo + (hi-lo)/2

		if nums[mid] == target {
			hi = mid - 1
		} else if nums[mid] < target {
			lo = mid + 1
		} else if nums[mid] > target {
			hi = mid - 1
		}
	}

	if 0 <= lo && lo < len(nums) && nums[lo] == target {
		return lo
	}

	return -1
}

func rightRange(nums []int, target int) int {
	if len(nums) == 0 {
		return -1
	}

	lo, hi := 0, len(nums)-1

	for lo <= hi {
		mid := lo + (hi-lo)/2

		if nums[mid] == target {
			lo = mid + 1
		} else if nums[mid] < target {
			lo = mid + 1
		} else if nums[mid] > target {
			hi = mid - 1
		}
	}

	if 0 <= hi && hi < len(nums) && nums[hi] == target {
		return hi
	}

	return -1
}
