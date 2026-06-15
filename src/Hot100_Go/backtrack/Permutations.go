package backtrack

func permute(nums []int) [][]int {
	var res [][]int

	visited := make(map[int]struct{})

	var backtrack func([]int)
	backtrack = func(track []int) {
		// base case
		if len(track) == len(nums) {
			temp := make([]int, len(track))
			copy(temp, track)
			res = append(res, temp)
			return
		}

		for _, num := range nums {
			if _, ok := visited[num]; ok {
				continue
			}

			visited[num] = struct{}{}
			track = append(track, num)

			backtrack(track)

			track = track[:len(track)-1]
			delete(visited, num)
		}
	}

	backtrack([]int{})

	return res
}
