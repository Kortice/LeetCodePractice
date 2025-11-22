/**
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 * 
 * k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 */


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return null

  // [a,b) 之间有k个元素反转
  let a = head, b = head
  for (let i = 0; i < k; i++) {
    if (b === null) return head
    b = b.next!
  }

  const newHead = reverseN(a, k)
  a.next = reverseKGroup(b, k)

  return newHead
}

// 反转前N个节点
function reverseN(head: ListNode | null, n: number): ListNode | null {
  if (head === null || head.next === null)
    return head

  let pre = null, cur = head, nxt = head.next

  while (n > 0) {
    cur.next = pre
    pre = cur
    cur = nxt
    // nxt走到最后了
    if (nxt !== null)
      nxt = nxt.next!
    n--
  }

  return pre
}