package linkedlist

func copyRandomList(head *Node) *Node {
	// 1 hashmap + 2 traverse

	// hashmap
	originToClone := make(map[*Node]*Node) // origin Node -> clone Node

	// traverse
	p := head
	for p != nil {
		originToClone[p] = &Node{Val: p.Val}
		p = p.Next
	}

	// traverse
	p = head
	for p != nil {
		if p.Next != nil {
			originToClone[p].Next = originToClone[p.Next]
		}
		if p.Random != nil {
			originToClone[p].Random = originToClone[p.Random]
		}
		p = p.Next
	}

	return originToClone[head]
}
