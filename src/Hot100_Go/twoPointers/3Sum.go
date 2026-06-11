package twopointers

import "sort"

func threeSum(nums []int) [][]int {
	sort.Ints(nums)

	var res [][]int
	for idx, num := range nums {
		// 跳过重复
		if idx > 0 && nums[idx] == nums[idx-1] {
			continue
		}

		tmp := twoSum(nums[idx+1:], 0-num)
		for _, s := range tmp {
			s = append(s, num)
			res = append(res, s)
		}
	}
	return res
}

// twoSum: 在 nums 找到和为 target 的二元组
func twoSum(nums []int, target int) [][]int {
	lo, hi := 0, len(nums)-1

	var res [][]int

	for lo < hi {
		if nums[lo]+nums[hi] < target {
			lo++
		} else if nums[lo]+nums[hi] > target {
			hi--
		} else {
			res = append(res, []int{nums[lo], nums[hi]})
			lo++
			hi--

			// 跳过重复
			for lo < hi && nums[lo] == nums[lo-1] {
				lo++
			}
			for lo < hi && nums[hi] == nums[hi+1] {
				hi--
			}
		}
	}

	return res
}
