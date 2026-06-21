package skill

func sortColors(nums []int) {
	l, r := 0, len(nums)-1
	p := l

	for p <= r {
		// 碰到1跳过
		if nums[p] == 1 {
			p++
			continue
			// 碰到0移动left
		} else if nums[p] == 0 {
			nums[l], nums[p] = nums[p], nums[l]
			l++
			// 碰到2移动right
		} else if nums[p] == 2 {
			nums[r], nums[p] = nums[p], nums[r]
			r--
		}

		// p肯定走在l或l前面
		// p >= l
		for p < l {
			p++
		}
	}
}
