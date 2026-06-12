package linkedlist

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	p, q := l1, l2
	carry := 0

	dummy := &ListNode{Val: -1, Next: nil}
	cur := dummy
	for p != nil || q != nil {
		sum := carry
		if p != nil {
			sum += p.Val
			p = p.Next
		}
		if q != nil {
			sum += q.Val
			q = q.Next
		}
		carry = sum / 10
		sum %= 10

		tmp := &ListNode{Val: sum, Next: nil}
		cur.Next = tmp
		cur = cur.Next
	}

	if carry == 1 {
		cur.Next = &ListNode{Val: 1, Next: nil}
	}

	return dummy.Next
}
