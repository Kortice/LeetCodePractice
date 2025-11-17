/**
 * 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 
 * 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // 指针
  let p1 = l1
  let p2 = l2
  // 虚拟头节点
  const dummy = new ListNode(-1)
  let p = dummy
  // 进位
  let carry = 0

  while (p1 !== null || p2 !== null || carry !== 0) {
    let val = carry

    if (p1 !== null) {
      val += p1.val
      p1 = p1.next
    }

    if (p2 !== null) {
      val += p2.val
      p2 = p2.next
    }
    // 处理进位
    carry = Math.floor(val / 10)
    val %= 10

    const newNode = new ListNode(val)
    p.next = newNode
    p = p.next
  }


  return dummy.next
}