package linkedlist

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	dummy := &ListNode{Val: -1, Next: nil}

	p, q := list1, list2

	cur := dummy
	for p != nil && q != nil {
		if p.Val < q.Val {
			cur.Next = p
			p = p.Next
		} else {
			cur.Next = q
			q = q.Next
		}
		cur = cur.Next
	}

	if p == nil {
		cur.Next = q
	}

	if q == nil {
		cur.Next = p
	}

	return dummy.Next
}
