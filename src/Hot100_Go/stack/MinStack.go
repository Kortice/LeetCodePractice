package stack

type MinStack struct {
	stk    []int // 普通栈
	minStk []int // 最小栈
}

func Constructor() MinStack {
	return MinStack{}
}

func (this *MinStack) Push(value int) {
	// stk
	this.stk = append(this.stk, value)
	// minStk
	if len(this.minStk) == 0 || value <= this.GetMin() {
		this.minStk = append(this.minStk, value)
	}
}

func (this *MinStack) Pop() {
	// stk
	top := this.stk[len(this.stk)-1]
	this.stk = this.stk[:len(this.stk)-1]
	// minStk
	if this.GetMin() == top {
		this.minStk = this.minStk[:len(this.minStk)-1]
	}
}

func (this *MinStack) Top() int {
	return this.stk[len(this.stk)-1]
}

func (this *MinStack) GetMin() int {
	return this.minStk[len(this.minStk)-1]
}
