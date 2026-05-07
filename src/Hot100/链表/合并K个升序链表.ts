/**
 * 给你一个链表数组，每个链表都已经按升序排列。
 * 
 * 请你将所有链表合并到一个升序链表中，返回合并后的链表。
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const dummy = new ListNode(-1)

  const pq = new PriorityQueue<ListNode>((a, b) => a.val - b.val)

  for (const node of lists) {
    if (node != null) {
      pq.enqueue(node)
    }
  }

  let p = dummy
  while (!pq.isEmpty()) {
    const node = pq.dequeue() as ListNode
    if (node.next !== null) {
      pq.enqueue(node.next)
    }
    p.next = node
    p = p.next
  }

  return dummy.next
};