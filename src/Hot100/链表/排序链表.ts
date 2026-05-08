/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 */

import { PriorityQueue } from "@datastructures-js/priority-queue"

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }

  const dummy = new ListNode(-1)

  const pq = new PriorityQueue<ListNode>((a, b) => a.val - b.val)

  let p: ListNode | null = head
  while (p !== null) {
    pq.enqueue(p)
    const temp: ListNode | null = p.next
    p.next = null
    p = temp
  }

  p = dummy
  while (!pq.isEmpty()) {
    const node = pq.dequeue() as ListNode
    p.next = node
    p = p.next
  }

  return dummy.next
};