package twopointers

func trap(height []int) int {
	res := 0

	left_max, right_max := 0, 0
	left, right := 0, len(height)-1

	for left < right {
		left_max = max(left_max, height[left])
		right_max = max(right_max, height[right])

		if left_max < right_max {
			res += left_max - height[left]
			left++
		} else {
			res += right_max - height[right]
			right--
		}
	}

	return res
}
