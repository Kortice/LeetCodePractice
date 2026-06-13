package linkedlist

func reverseKGroup(head *ListNode, k int) *ListNode {
	// base case
	// not enough k
	p := head
	for range k {
		if p == nil {
			// no change to list
			// just return head
			return head
		}
		p = p.Next
	}

	var pre *ListNode
	cur := head

	// k个交换
	// nil <- head <- node1 -/- node2 -> node3 -> ...
	for range k {
		cur.Next, pre, cur = pre, cur, cur.Next
	}

	// 递归修改
	head.Next = reverseKGroup(cur, k)

	// 返回新的头节点
	return pre
}
