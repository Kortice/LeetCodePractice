package backtrack

import "sort"

func combinationSum(candidates []int, target int) [][]int {
	var res [][]int

	// 排序
	sort.Ints(candidates)

	// track 收集结果
	// sum track的和
	// i 用来实现可以重复选择，但是不会重复组合
	var backtrack func(track []int, sum int, i int)
	backtrack = func(track []int, sum int, i int) {
		// base case
		if sum == target {
			tmp := make([]int, len(track))
			copy(tmp, track)
			res = append(res, tmp)
			return
		}

		for ; i < len(candidates); i++ {
			track = append(track, candidates[i])
			sum += candidates[i]

			// 提前剪枝
			// 因为前面排过序了
			// 如果当前 candidate + sum > target
			// 更不用说后面的 candidate 了

			if sum > target {
				sum -= candidates[i]
				track = track[:len(track)-1]
				return
			}

			backtrack(track, sum, i)

			sum -= candidates[i]
			track = track[:len(track)-1]
		}

	}

	backtrack([]int{}, 0, 0)

	return res
}
