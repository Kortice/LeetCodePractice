/**
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // 虚拟头节点
  const dummy = new ListNode(-1) // 往往需要创建新链表的时候可以使用 虚拟头节点 ，可以简化 p 为 null 的判断
  let p = dummy
  let p1 = list1, p2 = list2

  while (p1 !== null && p2 !== null) {
    if (p1.val > p2.val) {
      p.next = p2
      p2 = p2.next
    } else {
      p.next = p1
      p1 = p1.next
    }
    p = p.next
  }

  if (p1 !== null) {
    p.next = p1
  }

  if (p2 !== null) {
    p.next = p2
  }

  return dummy.next
}