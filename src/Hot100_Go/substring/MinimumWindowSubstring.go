package substring

func minWindow(s string, t string) string {
	var res []rune

	slc := []rune(s)

	need := make(map[rune]int)
	for _, r := range []rune(t) {
		need[r]++
	}

	// [left, right)
	left, right := 0, 0
	count := make(map[rune]int)
	valid := 0
	for right < len(slc) {
		c := slc[right]
		right++

		// rune c in need
		if _, ok := need[c]; ok {
			count[c]++
			if count[c] == need[c] {
				valid++
			}
		}

		for valid == len(need) {
			if res == nil || right-left < len(res) {
				res = slc[left:right]
			}

			d := slc[left]
			left++
			// rune d in need
			if _, ok := need[d]; ok {
				if count[d] == need[d] {
					valid--
				}
				count[d]--
			}
		}
	}

	return string(res)
}
