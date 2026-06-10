package hash

func twoSum(nums []int, target int) []int {
	var ret []int

	// num -> idx
	record := make(map[int]int)

	for idx, num := range nums {
		x := target - num
		if xIdx, ok := record[x]; ok {
			ret = append(ret, idx, xIdx)
			return ret
		}
		record[num] = idx
	}

	return ret
}
