package graphtheory

func orangesRotting(grid [][]int) int {
	m, n := len(grid), len(grid[0])

	var q [][]int // [i, j]

	// init q
	count := 0
	for i := range m {
		for j := range n {
			if grid[i][j] == 2 {
				q = append(q, []int{i, j})
			}
			if grid[i][j] == 1 {
				count++
			}
		}
	}

	// 没有新鲜子
	if count == 0 {
		return 0
	}

	minutes := 0

	dirs := [][]int{
		{-1, 0}, // 上
		{1, 0},  // 下
		{0, -1}, // 左
		{0, 1},  // 右
	}

	for len(q) > 0 {
		sz := len(q)
		for range sz {
			cur := q[0]
			q = q[1:]

			for _, dir := range dirs {
				if i, j := (cur[0] + dir[0]), (cur[1] + dir[1]); i >= 0 && i < m && j >= 0 && j < n {
					if grid[i][j] == 1 {
						count--
						grid[i][j] = 2
						q = append(q, []int{i, j})
					}
				}
			}

		}
		minutes++
	}

	if count == 0 {
		return minutes - 1
	}

	return -1
}
