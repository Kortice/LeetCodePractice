package linkedlist

func swapPairs(head *ListNode) *ListNode {
	// base case
	if head == nil || head.Next == nil {
		return head
	}

	var pre *ListNode
	cur := head

	// 两两交换
	// nil <- head <- node1 -/- node2 -> node3 -> ...
	for range 2 {
		cur.Next, pre, cur = pre, cur, cur.Next
	}

	// 递归修改
	head.Next = swapPairs(cur)

	// 返回新的头节点
	return pre
}
