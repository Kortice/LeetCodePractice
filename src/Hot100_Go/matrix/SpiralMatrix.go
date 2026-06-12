package matrix

func spiralOrder(matrix [][]int) []int {
	m, n := len(matrix), len(matrix[0])
	top, bottom, left, right := 0, m-1, 0, n-1
	total := m * n

	var res []int

	for len(res) < total {
		if left <= right && top <= bottom {
			for i := left; i <= right; i++ {
				res = append(res, matrix[top][i])
			}
			top++
		}

		if top <= bottom && left <= right {
			for i := top; i <= bottom; i++ {
				res = append(res, matrix[i][right])
			}
			right--
		}

		if right >= left && top <= bottom {
			for i := right; i >= left; i-- {
				res = append(res, matrix[bottom][i])
			}
			bottom--
		}

		if bottom >= top && left <= right {
			for i := bottom; i >= top; i-- {
				res = append(res, matrix[i][left])
			}
			left++
		}
	}

	return res
}
