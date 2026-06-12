package linkedlist

func isPalindrome(head *ListNode) bool {
	slow, fast := head, head
	for fast != nil && fast.Next != nil {
		fast = fast.Next.Next
		slow = slow.Next
	}

	q := reverseList(slow)
	p := head

	for q != nil {
		if p.Val != q.Val {
			return false
		}
		q = q.Next
		p = p.Next
	}

	return true
}
