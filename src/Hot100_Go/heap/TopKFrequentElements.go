package heap

// #region by heap O(nlogk)

// type pair struct {
// 	num  int
// 	freq int
// }

// type xheap []pair

// func (xh xheap) Len() int           { return len(xh) }
// func (xh xheap) Swap(i, j int)      { xh[i], xh[j] = xh[j], xh[i] }
// func (xh xheap) Less(i, j int) bool { return xh[i].freq < xh[j].freq }

// func (xh *xheap) Push(x any) {
// 	*xh = append(*xh, x.(pair))
// }

// func (xh *xheap) Pop() any {
// 	old := *xh
// 	n := len(old)
// 	x := old[n-1]
// 	*xh = old[:n-1]
// 	return x
// }

// func topKFrequent(nums []int, k int) []int {
// 	xh := &xheap{}
// 	heap.Init(xh)

// 	numToFreq := make(map[int]int)
// 	for _, num := range nums {
// 		numToFreq[num]++
// 	}

// 	for num, freq := range numToFreq {
// 		p := pair{num: num, freq: freq}

// 		if xh.Len() < k {
// 			heap.Push(xh, p)
// 		} else {
// 			if freq > (*xh)[0].freq {
// 				heap.Pop(xh)
// 				heap.Push(xh, p)
// 			}
// 		}
// 	}

// 	res := make([]int, k)
// 	for i, p := range *xh {
// 		res[i] = p.num
// 	}

// 	return res
// }

// #endregion

// #region 桶排序s O(n)

func topKFrequent(nums []int, k int) []int {
	numToFreq := make(map[int]int)

	maxFreq := 0
	for _, num := range nums {
		numToFreq[num]++
		maxFreq = max(maxFreq, numToFreq[num])
	}

	// bucket: freq -> []int
	bucket := make([][]int, maxFreq+1)

	for num, freq := range numToFreq {
		bucket[freq] = append(bucket[freq], num)
	}

	var res []int
	for i := maxFreq; len(res) < k; i-- {
		res = append(res, bucket[i]...)
	}
	return res
}

// #endregion
