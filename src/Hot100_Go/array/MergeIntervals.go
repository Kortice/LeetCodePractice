package array

import (
	"slices"
)

func merge(intervals [][]int) [][]int {
	var res [][]int

	// sort
	// 1.按照start小的先
	// 2.start相同按照end大的先
	slices.SortFunc(intervals, func(a []int, b []int) int {
		if a[0] == b[0] {
			return b[1] - a[1]
		}
		return a[0] - b[0]
	})

	// start 当前段的起点
	// end 当前段的终点
	start, end := intervals[0][0], intervals[0][1]
	for i := range len(intervals) - 1 {
		if intervals[i+1][0] <= end {
			if intervals[i+1][1] > end {
				// 相交
				end = intervals[i+1][1]
			}
		} else if intervals[i+1][0] > end {
			// 相离
			res = append(res, []int{start, end})
			start = intervals[i+1][0]
			end = intervals[i+1][1]
		}
	}

	res = append(res, []int{start, end})

	return res
}
