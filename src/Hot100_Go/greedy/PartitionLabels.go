package greedy

// #region xklong's algorithm
// func partitionLabels(s string) []int {
// 	var res []int

// 	left := 0
// 	var right int
// 	for left < len(s) {
// 		// get right
// 		right = getRight(s, s[left])
// 		for k := left + 1; k < right; k++ {
// 			if s[k] != s[left] {
// 				right = max(right, getRight(s, s[k]))
// 			}
// 		}
// 		res = append(res, right-left+1)
// 		left = right + 1
// 	}

// 	return res
// }

// func getRight(s string, b byte) int {
// 	for i := len(s) - 1; i >= 0; i-- {
// 		if s[i] == b {
// 			return i
// 		}
// 	}

// 	// 不会走这
// 	return -1
// }

// #endregion

// #region 合并区间
func partitionLabels(s string) []int {
	var last [26]int
	for i, r := range s {
		last[r-'a'] = i
	}

	var res []int

	start, end := 0, 0
	for i, r := range s {
		end = max(end, last[r-'a'])
		if i == end {
			res = append(res, end-start+1)
			start = end + 1
		}
	}

	return res
}

// #endregion
