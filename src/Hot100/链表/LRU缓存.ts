/**
 * 请你设计并实现一个满足  LRU (最近最少使用) 缓存 约束的数据结构。
 * 实现 LRUCache 类：
 * LRUCache(int capacity) 以 正整数 作为容量 capacity 初始化 LRU 缓存
 * int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
 * void put(int key, int value) 如果关键字 key 已经存在，则变更其数据值 value ；如果不存在，则向缓存中插入该组 key-value 。如果插入操作导致关键字数量超过 capacity ，则应该 逐出 最久未使用的关键字。
 * 函数 get 和 put 必须以 O(1) 的平均时间复杂度运行。
 */


class _Node {
  key: number
  value: number
  prev: _Node | null = null
  next: _Node | null = null

  constructor(key: number, value: number) {
    this.key = key
    this.value = value
  }
}

class DoubleList {
  // 虚拟头尾节点
  head: _Node
  tail: _Node
  _size: number

  constructor() {
    this.head = new _Node(0, 0)
    this.tail = new _Node(0, 0)
    this.head.next = this.tail
    this.tail.prev = this.head
    this._size = 0
  }

  // addLast 向链表结尾添加节点
  addLast(x: _Node) {
    x.prev = this.tail.prev
    x.next = this.tail
    this.tail.prev = x
    x.prev!.next = x
    this._size++
  }

  // remove 删除链表的某个节点
  remove(x: _Node) {
    x.prev!.next = x.next
    x.next!.prev = x.prev
    this._size--
  }

  // removeFirst 删除链表第一个节点并且返回
  removeFirst(): _Node | null {
    if (this.head.next === this.tail) {
      return null
    }
    const first = this.head.next as _Node
    this.remove(first)
    return first
  }

  // size 返回 链表长度
  size(): number {
    return this._size
  }
}

class LRUCache {
  map: Map<number, _Node>
  cache: DoubleList
  cap: number

  constructor(capacity: number) {
    this.map = new Map<number, _Node>()
    this.cache = new DoubleList
    this.cap = capacity
  }

  // makeRecently 将某个key-value提升为最近使用
  makeRecently(key: number) {
    const x = this.map.get(key) as _Node
    this.cache.remove(x)
    this.cache.addLast(x)
  }

  // addRecently 加入一个新的key-value为最近使用
  addRecently(key: number, value: number) {
    const x = new _Node(key, value)
    this.cache.addLast(x)
    this.map.set(key, x)
  }

  // deleteKey 删除某个key-value
  deleteKey(key: number) {
    const x = this.map.get(key) as _Node
    this.cache.remove(x)
    this.map.delete(key)
  }

  // removeLeastRecently 删除最久未使用的元素
  removeLeastRecently() {
    const x = this.cache.removeFirst() as _Node
    const key = x.key
    this.map.delete(key)
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1
    }
    const { value } = this.map.get(key) as _Node
    this.makeRecently(key)
    return value
  }

  put(key: number, value: number) {
    if (this.map.has(key)) {
      this.deleteKey(key)
      this.addRecently(key, value)
      return
    }
    this.addRecently(key, value)
    const cacheSize = this.cache.size()
    if (cacheSize > this.cap) {
      this.removeLeastRecently()
    }
  }
}