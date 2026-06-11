package twopointers

func moveZeroes(nums []int) {
	fast := 0
	slow := 0

	for ; fast < len(nums); fast++ {
		if nums[fast] != 0 {
			nums[slow] = nums[fast]
			slow++
		}
	}

	for ; slow < len(nums); slow++ {
		nums[slow] = 0
	}
}
