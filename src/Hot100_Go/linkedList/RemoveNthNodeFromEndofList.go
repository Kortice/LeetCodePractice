package linkedlist

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	dummy := &ListNode{Val: -1, Next: head}
	slow, fast := dummy, dummy

	for range n {
		fast = fast.Next
	}

	for fast.Next != nil {
		slow = slow.Next
		fast = fast.Next
	}

	// now: slow -> [node to delete] -> next node
	slow.Next = slow.Next.Next

	return dummy.Next
}
