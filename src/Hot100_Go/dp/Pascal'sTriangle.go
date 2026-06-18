package dp

func generate(numRows int) [][]int {
	res := make([][]int, numRows)

	for i := range numRows {
		tmp := make([]int, i+1)
		// base
		tmp[0], tmp[i] = 1, 1

		if i > 0 {
			// 计算本行
			for j := 1; j < i; j++ {
				// 左上 + 右上
				tmp[j] = res[i-1][j-1] + res[i-1][j]
			}
		}

		res[i] = tmp
	}

	return res
}
