package binarysearch

import "math"

func findMin(nums []int) int {
	lo, hi := 0, len(nums)-1
	last := nums[hi]

	res := math.MaxInt

	// 因为本来就有序
	// 所以最小值一定在右半区吧

	for lo <= hi {
		mid := lo + (hi-lo)/2

		res = min(res, nums[mid])

		if nums[mid] > last {
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}

	return res
}
