package heap

import "container/heap"

// 小顶堆
type xklHeap []int

func (xH xklHeap) Len() int           { return len(xH) }
func (xH xklHeap) Swap(i, j int)      { xH[i], xH[j] = xH[j], xH[i] }
func (xH xklHeap) Less(i, j int) bool { return xH[i] < xH[j] }

func (xH *xklHeap) Push(x any) {
	*xH = append(*xH, x.(int))
}

func (xH *xklHeap) Pop() any {
	old := *xH
	n := len(old)
	x := old[n-1]
	*xH = old[:n-1]
	return x
}

func findKthLargest(nums []int, k int) int {
	xH := &xklHeap{}
	heap.Init(xH)

	for _, num := range nums {
		if xH.Len() < k {
			heap.Push(xH, num)
		} else {
			if (*xH)[0] < num {
				heap.Pop(xH)
				heap.Push(xH, num)
			}
		}
	}

	return heap.Pop(xH).(int)
}
