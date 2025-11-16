/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 */



class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// 使用快慢指针的技巧
function hasCycle(head: ListNode | null): boolean {
  let slow = head, fast = head

  // 快指针走到末尾时停止
  while (fast !== null && fast.next !== null) {
    slow = slow!.next
    fast = fast.next.next

    if (slow === fast)
      return true
  }

  return false
}