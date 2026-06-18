package heap

import "container/heap"

// #region heap define
// 大顶堆
type greatHeap []int

func (gh greatHeap) Len() int           { return len(gh) }
func (gh greatHeap) Swap(i, j int)      { gh[i], gh[j] = gh[j], gh[i] }
func (gh greatHeap) Less(i, j int) bool { return gh[i] > gh[j] }

// heap interface
func (gh *greatHeap) Push(x any) {
	*gh = append(*gh, x.(int))
}

func (gh *greatHeap) Pop() any {
	old := *gh
	n := len(old)
	x := old[n-1]
	*gh = old[:n-1]
	return x
}

// 小顶堆
type lessHeap []int

func (lh lessHeap) Len() int           { return len(lh) }
func (lh lessHeap) Swap(i, j int)      { lh[i], lh[j] = lh[j], lh[i] }
func (lh lessHeap) Less(i, j int) bool { return lh[i] < lh[j] }

// heap interface
func (lh *lessHeap) Push(x any) {
	*lh = append(*lh, x.(int))
}

func (lh *lessHeap) Pop() any {
	old := *lh
	n := len(old)
	x := old[n-1]
	*lh = old[:n-1]
	return x
}

// #endregion

type MedianFinder struct {
	gH *greatHeap // 大顶堆
	lH *lessHeap  // 小顶堆
}

func Constructor() MedianFinder {
	mf := MedianFinder{
		gH: &greatHeap{},
		lH: &lessHeap{},
	}

	heap.Init(mf.gH)
	heap.Init(mf.lH)

	return mf
}

func (this *MedianFinder) AddNum(num int) {
	// 添加到大顶堆
	heap.Push(this.gH, num)
	// 将大顶堆中的最大值塞到小顶堆中
	heap.Push(this.lH, heap.Pop(this.gH))

	// 平衡
	if this.lH.Len() > this.gH.Len() {
		heap.Push(this.gH, heap.Pop(this.lH))
	}
}

func (this *MedianFinder) FindMedian() float64 {
	// 奇数
	// 中位数在多的那一边

	if this.lH.Len() > this.gH.Len() {
		return float64((*this.lH)[0])
	}

	if this.gH.Len() > this.lH.Len() {
		return float64((*this.gH)[0])
	}

	// 偶数
	return float64((*this.lH)[0]+(*this.gH)[0]) / 2.0
}
