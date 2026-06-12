package matrix

import (
	"slices"
)

func setZeroes(matrix [][]int) {
	// m x n
	m, n := len(matrix), len(matrix[0])

	firstRowZero, firstColZero := false, false
	firstRowZero = slices.Contains(matrix[0], 0)
	for i := range matrix {
		if matrix[i][0] == 0 {
			firstColZero = true
			break
		}
	}

	for i := range m {
		for j := range n {
			if matrix[i][j] == 0 {
				matrix[0][j] = 0
				matrix[i][0] = 0
			}
		}
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			if matrix[i][0] == 0 || matrix[0][j] == 0 {
				matrix[i][j] = 0
			}
		}
	}

	if firstRowZero {
		for j := range n {
			matrix[0][j] = 0
		}
	}

	if firstColZero {
		for i := range m {
			matrix[i][0] = 0
		}
	}
}
