package slidingwindow

func lengthOfLongestSubstring(s string) int {
	slc := []byte(s)

	// [left, right)
	left, right := 0, 0
	has := make(map[byte]int)

	res := 0

	for right < len(slc) {
		c := slc[right]
		right++
		has[c]++

		// 需要收缩
		for has[c] > 1 {
			d := slc[left]
			left++
			has[d]--
		}

		// 更新结果
		res = max(res, right-left)
	}

	return res
}
