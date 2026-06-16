package backtrack

func exist(board [][]byte, word string) bool {
	found := false

	m, n := len(board), len(board[0])

	visited := make([][]bool, m)
	for i := range visited {
		visited[i] = make([]bool, n)
	}

	wordArr := []byte(word)

	var dfs func(row, col, i int)
	dfs = func(row, col, i int) {
		if i == len(wordArr) {
			found = true
			return
		}

		if found {
			return
		}

		if row < 0 || row >= m || col < 0 || col >= n {
			return
		}

		if visited[row][col] {
			return
		}

		if board[row][col] != wordArr[i] {
			return
		}

		visited[row][col] = true
		dfs(row-1, col, i+1)
		dfs(row+1, col, i+1)
		dfs(row, col-1, i+1)
		dfs(row, col+1, i+1)
		visited[row][col] = false

	}

	for i := range m {
		for j := range n {
			dfs(i, j, 0)
			if found {
				return true
			}
		}
	}

	return false
}

// func exist(board [][]byte, word string) bool {
// 	found := false

// 	m, n := len(board), len(board[0])

// 	wordArr := []byte(word)

// 	dirs := [][]int{
// 		{0, 0},
// 		{-1, 0},
// 		{1, 0},
// 		{0, -1},
// 		{0, 1},
// 	}

// 	used := make([][]bool, len(board))
// 	for i := range used {
// 		used[i] = make([]bool, len(board[0]))
// 	}

// 	var backtrack func(track []byte, i, col, row int)
// 	backtrack = func(track []byte, i, col, row int) {
// 		if len(track) == len(wordArr) {
// 			found = true
// 			return
// 		}

// 		if found {
// 			return
// 		}

// 		for _, dir := range dirs {
// 			c, r := col+dir[0], row+dir[1]
// 			if c < 0 || c >= m || r < 0 || r >= n {
// 				continue
// 			}

// 			if used[c][r] {
// 				continue
// 			}

// 			if board[c][r] == wordArr[i] {
// 				track = append(track, wordArr[i])
// 				used[c][r] = true

// 				backtrack(track, i+1, c, r)

// 				used[c][r] = false
// 				track = track[:len(track)-1]
// 			}
// 		}

// 	}

// 	for i := range m {
// 		for j := range n {
// 			if found {
// 				return found
// 			}
// 			backtrack([]byte{}, 0, i, j)
// 		}
// 	}

// 	return found
// }
