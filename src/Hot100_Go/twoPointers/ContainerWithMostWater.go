package twopointers

func maxArea(height []int) int {
	left := 0
	right := len(height) - 1

	var ret int
	// 在 left = right 的时候停止
	for left < right {
		area := min(height[left], height[right]) * (right - left)
		ret = max(ret, area)
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}

	return ret
}
