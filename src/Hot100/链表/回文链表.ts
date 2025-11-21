/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 */


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function isPalindrome(head: ListNode | null): boolean {
  let slow = head, fast = head
  const stk: ListNode[] = []
  while (fast !== null && fast.next !== null) {
    stk.push(slow!)
    slow = slow?.next!
    fast = fast.next.next
  }
  // 奇数
  if (fast !== null) {
    slow = slow?.next!
  }

  while (slow !== null) {
    const node = stk.pop()
    if (node?.val !== slow.val) {
      return false
    }
    slow = slow.next
  }

  return true
}