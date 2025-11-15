/**
 * 给你两个单链表的头节点 headA 和 headB 
 * 请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 */


class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  // p1 指向 A 链表的头节点 / p2 指向 B 链表的头节点
  let p1 = headA, p2 = headB
  while (p1 !== p2) {
    // p1 走一步 如果走到末尾 转到 B 链表
    if (p1 === null) p1 = headB
    else p1 = p1.next

    // p2 走一步 如果走到末尾 转到 A 链表
    if (p2 === null) p2 = headA
    else p2 = p2.next
  }

  return p1
}