/**
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 * 
 * 不允许修改 链表。
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  // 定义快慢指针 slow 1 step / fast 2 step.
  let slow = head, fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow!.next
    fast = fast.next.next
    if (slow === fast)
      break
  }
  // 不存在环
  if (fast === null || fast.next === null)
    return null
  // 存在环
  slow = head
  while (slow !== fast) {
    slow = slow!.next
    fast = fast!.next
  }

  return slow
}