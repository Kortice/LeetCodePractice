package stack

import (
	"strings"
)

func isValid(s string) bool {
	sArr := []rune(s)

	left := "([{"

	mapping := map[rune]rune{
		'(': ')',
		'[': ']',
		'{': '}',
	}

	var stk []rune

	for _, r := range sArr {
		// left
		if strings.ContainsRune(left, r) {
			stk = append(stk, r)
			// right
		} else {
			if len(stk) > 0 {
				top := stk[len(stk)-1]
				need := mapping[top]
				if r == need {
					stk = stk[:len(stk)-1]
				} else {
					return false
				}
			} else {
				return false
			}
		}
	}

	return len(stk) == 0
}
