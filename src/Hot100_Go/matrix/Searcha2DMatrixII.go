package matrix

func searchMatrix(matrix [][]int, target int) bool {
	m, n := len(matrix), len(matrix[0])
	i, j := 0, n-1

	for 0 <= i && i < m && 0 <= j && j < n {
		if matrix[i][j] == target {
			return true
		} else if matrix[i][j] > target {
			j--
		} else if matrix[i][j] < target {
			i++
		}
	}

	return false
}
