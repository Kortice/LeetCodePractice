package matrix

import "slices"

func rotate(matrix [][]int) {
	n := len(matrix)
	for i := range n {
		slices.Reverse(matrix[i])
	}

	for i := range n {
		for j := range n - i {
			matrix[i][j], matrix[n-1-j][n-1-i] = matrix[n-1-j][n-1-i], matrix[i][j]
		}
	}
}
