package backtrack

func letterCombinations(digits string) []string {
	// phone number map to character
	numToChar := [][]rune{
		nil,                  // 0
		nil,                  // 1
		{'a', 'b', 'c'},      // 2
		{'d', 'e', 'f'},      // 3
		{'g', 'h', 'i'},      // 4
		{'j', 'k', 'l'},      // 5
		{'m', 'n', 'o'},      // 6
		{'p', 'q', 'r', 's'}, // 7
		{'t', 'u', 'v'},      // 8
		{'w', 'x', 'y', 'z'}, // 9
	}

	var res []string

	digitsArr := []rune(digits)

	var backtrack func([]rune, int)
	backtrack = func(track []rune, i int) {
		// base case
		if len(track) == len(digitsArr) {
			res = append(res, string(track))
			return
		}

		if i > len(digitsArr) {
			return
		}

		// make choice
		for _, char := range numToChar[digitsArr[i]-'0'] {
			track = append(track, char)
			backtrack(track, i+1)
			track = track[:len(track)-1]
		}
	}

	backtrack([]rune{}, 0)

	return res
}
