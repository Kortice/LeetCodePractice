package graphtheory

func numIslands(grid [][]byte) int {
	count := 0

	m, n := len(grid), len(grid[0])

	var dfs func(int, int)
	dfs = func(i, j int) {
		// invalid position
		if i < 0 || i >= m || j < 0 || j >= n {
			return
		}

		if grid[i][j] == '0' {
			return
		}

		// 淹没陆地
		if grid[i][j] == '1' {
			grid[i][j] = '0'
		}

		dfs(i-1, j) // 上
		dfs(i+1, j) // 下
		dfs(i, j-1) // 左
		dfs(i, j+1) // 右
	}

	for i := range m {
		for j := range n {
			if grid[i][j] == '1' {
				count++
				dfs(i, j)
			}
		}
	}

	return count
}
