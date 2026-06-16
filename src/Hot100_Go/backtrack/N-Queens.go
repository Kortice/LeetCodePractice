package backtrack

func solveNQueens(n int) [][]string {
	var res [][]string

	var backtrack func(track [][]rune, row int)
	backtrack = func(track [][]rune, row int) {
		if row == n {
			tmp := make([]string, n)
			for i := range n {
				var s string
				for j := range n {
					s += string(track[i][j])
				}
				tmp[i] = s
			}

			res = append(res, append([]string{}, tmp...))
			return
		}

		for col := range n {
			if isValid(track, row, col, n) {
				track[row][col] = 'Q'
				backtrack(track, row+1)
				track[row][col] = '.'
			}
		}
	}

	track := make([][]rune, n)
	for i := range n {
		for range n {
			track[i] = append(track[i], '.')
		}
	}

	backtrack(track, 0)

	return res
}

// isValid [i,j] 能否放 Queen
func isValid(grid [][]rune, i, j, n int) bool {
	// 同一列有了
	for row := range i {
		if grid[row][j] == 'Q' {
			return false
		}
	}

	// 左上有了
	for row, col := i-1, j-1; row >= 0 && col >= 0; row, col = row-1, col-1 {
		if grid[row][col] == 'Q' {
			return false
		}
	}

	// 右上有了
	for row, col := i-1, j+1; row >= 0 && col < n; row, col = row-1, col+1 {
		if grid[row][col] == 'Q' {
			return false
		}
	}

	return true
}
