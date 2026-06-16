package backtrack

func generateParenthesis(n int) []string {
	var res []string

	var backtrack func([]rune, int, int)
	backtrack = func(track []rune, leftCount int, invalid int) {
		if len(track) == n*2 {
			res = append(res, string(track))
			return
		}

		for _, r := range []rune{'(', ')'} {
			if r == '(' {
				// 左括号够多了
				if leftCount == n {
					continue
				}
				track = append(track, r)
				backtrack(track, leftCount+1, invalid+1)
				track = track[:len(track)-1]
			} else {
				if invalid <= 0 {
					continue
				}
				track = append(track, r)
				backtrack(track, leftCount, invalid-1)
				track = track[:len(track)-1]
			}

		}
	}

	backtrack([]rune{}, 0, 0)

	return res
}
