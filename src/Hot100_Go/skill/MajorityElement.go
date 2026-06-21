package skill

func majorityElement(nums []int) int {
	var ans int

	hp := 0

	for _, num := range nums {
		if hp == 0 {
			ans, hp = num, 1
		} else {
			if ans == num {
				hp++
			} else {
				hp--
			}
		}
	}

	return ans
}
