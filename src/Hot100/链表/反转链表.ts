/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// 迭代
// function reverseList(head: ListNode | null): ListNode | null {
//   let pre = null, cur = head, nxt = head?.next

//   while (cur !== null) {
//     cur.next = pre
//     pre = cur
//     cur = nxt!
//     if (nxt !== null)
//       nxt = nxt?.next
//   }

//   return pre
// }

// 递归
function reverseList(head: ListNode | null): ListNode | null {
  // base case
  if (head === null || head.next === null) {
    return head
  }

  const last = reverseList(head.next)
  head.next.next = head
  head.next = null

  return last
}