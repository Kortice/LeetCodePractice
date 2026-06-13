package linkedlist

import "container/list"

type node struct {
	key   int
	value int
}

type LRUCache struct {
	l   *list.List            // 双向链表
	m   map[int]*list.Element // key-node
	cap int                   // 容量
}

func Constructor(capacity int) LRUCache {
	cache := LRUCache{
		l:   list.New(),
		m:   make(map[int]*list.Element),
		cap: capacity,
	}

	return cache
}

func (this *LRUCache) Get(key int) int {
	elem, ok := this.m[key]
	if !ok {
		return -1
	}
	this.l.MoveToFront(elem)

	return elem.Value.(*node).value
}

func (this *LRUCache) Put(key int, value int) {
	if elem, ok := this.m[key]; ok {
		// 如果已存在
		elem.Value.(*node).value = value
		this.l.MoveToFront(elem)
	} else {
		// 不存在，新添
		if this.l.Len() == this.cap {
			// 如果满了
			elem := this.l.Back()
			key := elem.Value.(*node).key
			this.l.Remove(elem)
			delete(this.m, key)
		}
		newElem := this.l.PushFront(&node{key: key, value: value})
		this.m[key] = newElem
	}
}
