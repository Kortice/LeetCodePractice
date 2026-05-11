/**
 * 给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// 归并排序
function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head

  const middle = middleNode(head)

  const left = sortList(head)
  const right = sortList(middle)

  return merge(left, right)
};

// 合并链表(升序)
function merge(list1: ListNode | null, list2: ListNode | null): ListNode {
  const dummy = new ListNode()

  let p = dummy
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      p.next = list1
      list1 = list1.next
    } else {
      p.next = list2
      list2 = list2.next
    }
    p = p.next
  }

  p.next = list1 ?? list2

  return dummy.next!
}

// 快慢指针取中间节点
function middleNode(head: ListNode): ListNode | null {
  let pre: ListNode | null = head
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  while (fast !== null && fast.next !== null) {
    pre = slow
    slow = slow!.next
    fast = fast.next.next
  }
  pre!.next = null

  return slow
}

// import { PriorityQueue } from "@datastructures-js/priority-queue"

// function sortList(head: ListNode | null): ListNode | null {
//   if (head === null) {
//     return null
//   }

//   const dummy = new ListNode(-1)

//   const pq = new PriorityQueue<ListNode>((a, b) => a.val - b.val)

//   let p: ListNode | null = head
//   while (p !== null) {
//     pq.enqueue(p)
//     const temp: ListNode | null = p.next
//     p.next = null
//     p = temp
//   }

//   p = dummy
//   while (!pq.isEmpty()) {
//     const node = pq.dequeue() as ListNode
//     p.next = node
//     p = p.next
//   }

//   return dummy.next
// };
