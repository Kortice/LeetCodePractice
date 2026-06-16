package backtrack

func partition(s string) [][]string {
	var res [][]string

	sArr := []byte(s)

	var backtrack func(track []string, start, end int)
	backtrack = func(track []string, start, end int) {
		if start == end {
			res = append(res, append([]string{}, track...))
			return
		}

		for i := start; i < end; i++ {
			tmp := sArr[start : i+1]
			if isPalindrome(tmp) {
				track = append(track, string(tmp))
				backtrack(track, i+1, end)
				track = track[0 : len(track)-1]
			}
		}

	}

	backtrack([]string{}, 0, len(sArr))
	return res
}

func isPalindrome(s []byte) bool {
	i, j := 0, len(s)-1
	for i <= j {
		if s[i] != s[j] {
			return false
		}
		i++
		j--
	}

	return true
}
