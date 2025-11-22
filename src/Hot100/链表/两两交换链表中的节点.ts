/**
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null)
    return head

  let a = head, b = head
  for (let i = 0; i < 2; i++) {
    if (b === null) return head
    b = b.next!
  }

  const newHead = reverseN(a, 2)
  a.next = swapPairs(b)

  return newHead
}

// 反转前n个节点
function reverseN(head: ListNode | null, n: number): ListNode | null {
  if (head === null || head.next === null)
    return head

  let pre = null, cur = head, nxt = head.next

  while (n > 0) {
    cur.next = pre
    pre = cur
    cur = nxt
    if (nxt !== null)
      nxt = nxt.next!
    n--
  }

  head.next = cur

  return pre
}