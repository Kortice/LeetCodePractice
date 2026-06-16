package binarysearch

import "math"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	// 保证 nums1 是短的
	if len(nums1) > len(nums2) {
		return findMedianSortedArrays(nums2, nums1)
	}

	m, n := len(nums1), len(nums2)

	half := (m + n + 1) / 2

	// 只在 短的 nums1 切割
	// 设置为 m （而不是 m-1 ）是因为可以切到最后
	left, right := 0, m

	for left <= right {
		i := left + (right-left)/2
		j := half - i

		var maxLeft1 int
		if i == 0 {
			maxLeft1 = math.MinInt
		} else {
			maxLeft1 = nums1[i-1]
		}

		var minRight1 int
		if i == m {
			minRight1 = math.MaxInt
		} else {
			minRight1 = nums1[i]
		}

		var maxLeft2 int
		if j == 0 {
			maxLeft2 = math.MinInt
		} else {
			maxLeft2 = nums2[j-1]
		}

		var minRight2 int
		if j == n {
			minRight2 = math.MaxInt
		} else {
			minRight2 = nums2[j]
		}

		if maxLeft1 <= minRight2 && maxLeft2 <= minRight1 {
			if (m+n)%2 == 1 {
				return float64(max(maxLeft1, maxLeft2))
			}
			return float64(max(maxLeft1, maxLeft2)+min(minRight1, minRight2)) / 2.0
		} else if maxLeft1 > minRight2 {
			right = i - 1
		} else {
			left = i + 1
		}
	}

	return 0.0
}
