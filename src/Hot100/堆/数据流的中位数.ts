/**
 * 中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。
 * 
 * 实现 MedianFinder 类:
 * MedianFinder() 初始化 MedianFinder 对象。
 * void addNum(int num) 将数据流中的整数 num 添加到数据结构中。
 * double findMedian() 返回到目前为止所有元素的中位数。与实际答案相差 10-5 以内的答案将被接受。
 */

import { PriorityQueue } from "@datastructures-js/priority-queue";

class MedianFinder {
  // 小顶堆
  minPQ: PriorityQueue<number>
  // 大顶堆
  maxPQ: PriorityQueue<number>

  constructor() {
    this.minPQ = new PriorityQueue<number>((a, b) => a - b)
    this.maxPQ = new PriorityQueue<number>((a, b) => b - a)
  }

  addNum(num: number): void {
    if (this.minPQ.size() >= this.maxPQ.size()) {
      this.minPQ.push(num)
      this.maxPQ.push(this.minPQ.pop() as number)
    } else {
      this.maxPQ.push(num)
      this.minPQ.push(this.maxPQ.pop() as number)
    }
  }

  findMedian(): number {
    // 奇数个
    if (this.minPQ.size() > this.maxPQ.size()) {
      return this.minPQ.front() as number
    } else if (this.maxPQ.size() > this.minPQ.size()) {
      return this.maxPQ.front() as number
    }

    // 偶数个
    return ((this.maxPQ.front() as number) + (this.minPQ.front() as number)) / 2.0
  }
}