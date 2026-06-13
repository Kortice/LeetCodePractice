package linkedlist

import "container/heap"

// define type
type NodeHeap []*ListNode

// sort.Interface
func (h NodeHeap) Len() int           { return len(h) }
func (h NodeHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h NodeHeap) Less(i, j int) bool { return h[i].Val < h[j].Val }

// heap interface
func (h *NodeHeap) Push(x any) {
	*h = append(*h, x.(*ListNode))
}

func (h *NodeHeap) Pop() any {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[:n-1]
	return x
}

func mergeKLists(lists []*ListNode) *ListNode {
	h := &NodeHeap{}
	heap.Init(h)

	for _, head := range lists {
		if head != nil {
			heap.Push(h, head)
		}
	}

	dummy := &ListNode{}
	p := dummy
	for h.Len() > 0 {
		node := heap.Pop(h).(*ListNode)
		if node.Next != nil {
			heap.Push(h, node.Next)
		}
		p.Next = node
		p = p.Next
	}

	return dummy.Next
}
