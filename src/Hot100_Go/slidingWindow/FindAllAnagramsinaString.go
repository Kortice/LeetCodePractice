package slidingwindow

import "strings"

func findAnagrams(s string, p string) []int {
	slc := []rune(s)

	// [left, right)
	left, right := 0, 0

	valid := 0
	need := make(map[rune]int)
	count := make(map[rune]int)

	// 初始化 need
	for _, r := range []rune(p) {
		need[r]++
	}

	var res []int

	for right < len(s) {
		c := slc[right]
		right++
		if strings.ContainsRune(p, c) {
			count[c]++
			if count[c] == need[c] {
				valid++
			}
		}

		if right-left > len(p) {
			d := slc[left]
			left++
			if strings.ContainsRune(p, d) {
				if count[d] == need[d] {
					valid--
				}
				count[d]--
			}
		}

		if valid == len(need) {
			res = append(res, left)
		}
	}

	return res
}
