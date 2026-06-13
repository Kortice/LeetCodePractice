package linkedlist

func sortList(head *ListNode) *ListNode {
	return sort(head)
}

// 归并排序
func sort(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}

	mid := midNode(head)
	nxt := mid.Next
	mid.Next = nil
	left := sort(head)
	right := sort(nxt)

	ret := merge(left, right)

	return ret
}

// 归并
func merge(h1 *ListNode, h2 *ListNode) *ListNode {
	dummy := &ListNode{}
	cur := dummy

	p, q := h1, h2
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

	if p != nil {
		cur.Next = p
	}
	if q != nil {
		cur.Next = q
	}

	return dummy.Next
}

// midNode 返回以 head 为起点的链表的中间节点
func midNode(head *ListNode) *ListNode {
	slow, fast := head, head.Next

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next
	}

	return slow
}
