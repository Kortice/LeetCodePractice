/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 */


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(-1)
  dummy.next = head
  let slow = dummy, fast = dummy

  for (let i=0; i<n; i++) {
    fast = fast.next!
  }

  while (fast.next !== null) {
    slow = slow.next!
    fast = fast.next
  }

  slow.next = slow.next?.next!

  return dummy.next
}