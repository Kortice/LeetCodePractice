package backtrack

func subsets(nums []int) [][]int {
	var res [][]int

	// 因为集合是无序的
	// 所以可以通过给定顺序来保证不会重复
	// [i...] 这样的顺序

	var backtrack func([]int, int)
	backtrack = func(track []int, i int) {
		// record array
		tmp := make([]int, len(track))
		copy(tmp, track)
		res = append(res, tmp)

		for ; i < len(nums); i++ {
			track = append(track, nums[i])
			backtrack(track, i+1)
			track = track[:len(track)-1]
		}
	}

	backtrack([]int{}, 0)

	return res
}
