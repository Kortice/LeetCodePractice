package substring

func maxSlidingWindow(nums []int, k int) []int {
	var res []int

	// [left, right)
	left, right := 0, 0
	mq := &MonotonicQueue{}
	for right < len(nums) {
		mq.Push(nums[right])
		right++

		if mq.Size() > k {
			mq.Pop(nums[left])
			left++
		}

		if mq.Size() == k {
			res = append(res, mq.GetMax())
		}
	}

	return res
}

// 单调队列
type MonotonicQueue struct {
	queue []int // maxQueue
	size  int   // size of queue != maxQueue.size
}

func (mq *MonotonicQueue) Push(val int) {
	for len(mq.queue) > 0 && val > mq.queue[len(mq.queue)-1] {
		mq.queue = mq.queue[:len(mq.queue)-1]
	}
	mq.queue = append(mq.queue, val)
	mq.size++
}

func (mq *MonotonicQueue) Pop(val int) {
	if len(mq.queue) > 0 && mq.queue[0] == val {
		mq.queue = mq.queue[1:]
	}
	mq.size--
}

func (mq *MonotonicQueue) Size() int {
	return mq.size
}

func (mq *MonotonicQueue) GetMax() int {
	return mq.queue[0]
}
