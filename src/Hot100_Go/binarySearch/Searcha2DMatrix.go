package binarysearch

func searchMatrix(matrix [][]int, target int) bool {
	m, n := len(matrix), len(matrix[0])
	lo, hi := 0, m*n-1

	for lo <= hi {
		mid := lo + (hi-lo)/2
		i, j := mid/n, mid%n

		if matrix[i][j] == target {
			return true
		} else if matrix[i][j] < target {
			lo = mid + 1
		} else if matrix[i][j] > target {
			hi = mid - 1
		}
	}

	return false
}
