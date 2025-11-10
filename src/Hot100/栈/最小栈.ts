/**
 * 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
 * 
 * 实现 MinStack 类:
 * 
 * MinStack() 初始化堆栈对象。
 * void push(int val) 将元素val推入堆栈。
 * void pop() 删除堆栈顶部的元素。
 * int top() 获取堆栈顶部的元素。
 * int getMin() 获取堆栈中的最小元素。
 */


class MinStack {
  stk: number[]
  minStk: number[]

  constructor() {
    this.stk = []
    this.minStk = []
  }

  push(val: number): void {
    this.stk.push(val)
    if (this.minStk.length === 0)
      this.minStk.push(val)
    else {
      // 如果新的值比当前最小还小
      if (val < this.minStk[this.minStk.length - 1])
        this.minStk.push(val)
      // 否则
      else
        this.minStk.push(this.minStk[this.minStk.length - 1])
    }
  }

  pop(): void {
    this.stk.pop()
    this.minStk.pop()
  }

  top(): number {
    return this.stk[this.stk.length - 1]
  }

  getMin(): number {
    return this.minStk[this.minStk.length - 1]
  }
}