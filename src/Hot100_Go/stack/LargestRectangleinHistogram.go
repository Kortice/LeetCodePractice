package stack

func largestRectangleArea(heights []int) int {
	// 单调栈
	// 上一个比自己小的
	var preStk []int
	pre := make([]int, len(heights))
	// 下一个比自己小的
	var nxtStk []int
	nxt := make([]int, len(heights))

	for i := range heights {
		for len(preStk) != 0 && heights[preStk[len(preStk)-1]] >= heights[i] {
			preStk = preStk[:len(preStk)-1]
		}

		if len(preStk) == 0 {
			pre[i] = -1
		} else {
			pre[i] = preStk[len(preStk)-1]
		}

		preStk = append(preStk, i)
	}

	for i := len(heights) - 1; i >= 0; i-- {
		for len(nxtStk) != 0 && heights[nxtStk[len(nxtStk)-1]] >= heights[i] {
			nxtStk = nxtStk[:len(nxtStk)-1]
		}

		if len(nxtStk) == 0 {
			nxt[i] = len(heights)
		} else {
			nxt[i] = nxtStk[len(nxtStk)-1]
		}

		nxtStk = append(nxtStk, i)
	}

	res := 0
	for i, h := range heights {
		area := h * (nxt[i] - pre[i] - 1)
		res = max(res, area)
	}
	return res
}
