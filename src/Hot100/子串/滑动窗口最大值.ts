/**
 * 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。
 * 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 
 * 返回 滑动窗口中的最大值 。
 */

class MonotonicQueue { // 单调队列

  maxq: number[]

  constructor() {
    this.maxq = []
  }

  // 在队尾添加一个元素n,维护单调性
  push(n: number) {
    while (this.maxq.length !== 0 && this.maxq[this.maxq.length - 1] < n) {
      this.maxq.pop()
    }
    this.maxq.push(n)
  }

  // 当前最大值 也就是队头
  max(): number {
    return this.maxq[0]
  }

  // 如果队头是 n 则删除他
  pop(n: number) {
    if (this.maxq[0] === n)
      this.maxq.shift()
  }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
  // 维护一个单调队列 动态存储每个窗口的最大值
  const mq: MonotonicQueue = new MonotonicQueue()
  // 结果数组
  const res: number[] = []

  for (let i = 0; i < nums.length; i++) {
    // 先存入 k-1 个数字
    if (i < k - 1) {
      mq.push(nums[i])
    } else {
      // 存入新数
      mq.push(nums[i])
      // 返回最大值
      res.push(mq.max())
      // 删除旧数
      mq.pop(nums[i - k + 1])
    }
  }

  return res
}