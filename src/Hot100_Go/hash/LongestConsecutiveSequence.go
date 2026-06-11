package hash

func longestConsecutive(nums []int) int {
	has := make(map[int]struct{})

	for _, num := range nums {
		has[num] = struct{}{}
	}

	var ret int

	for x := range has {
		// 存在x-1
		if _, ok := has[x-1]; ok {
			continue
		}

		// 序列以x为开头
		y := x + 1
		for {
			if _, ok := has[y]; !ok {
				ret = max(ret, y-x)
				break
			}
			y++
		}
	}

	return ret
}
