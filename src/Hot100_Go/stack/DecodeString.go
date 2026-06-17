package stack

import (
	"strings"
	"unicode"
)

func decodeString(s string) string {
	var numStack []int
	var strStack []string

	currentNum := 0
	currentStr := ""

	for _, r := range s {
		if unicode.IsNumber(r) {
			currentNum = currentNum*10 + int(r-'0')
		} else if unicode.IsLetter(r) {
			currentStr += string(r)
		} else if r == '[' {
			// 左括号 保存现场
			numStack = append(numStack, currentNum)
			strStack = append(strStack, currentStr)

			currentNum = 0
			currentStr = ""
		} else if r == ']' {
			// 右括号 拼接+恢复现场
			popNum := numStack[len(numStack)-1]
			numStack = numStack[:len(numStack)-1]

			popStr := strStack[len(strStack)-1]
			strStack = strStack[:len(strStack)-1]

			currentStr = popStr + strings.Repeat(currentStr, popNum)
		}
	}

	return currentStr
}
