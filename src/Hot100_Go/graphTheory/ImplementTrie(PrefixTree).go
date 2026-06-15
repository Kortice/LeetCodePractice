package graphtheory

type Node struct {
	end bool
	son [26]*Node
}

type Trie struct {
	root *Node
}

func Constructor() Trie {
	return Trie{&Node{}}
}

func (this *Trie) Insert(word string) {
	cur := this.root
	for _, c := range word {
		c -= 'a'
		if cur.son[c] == nil {
			cur.son[c] = &Node{}
		}
		cur = cur.son[c]
	}

	cur.end = true
}

func (this *Trie) Search(word string) bool {
	cur := this.root
	for _, c := range word {
		c -= 'a'
		if cur.son[c] == nil {
			return false
		}
		cur = cur.son[c]
	}

	return cur.end == true
}

func (this *Trie) StartsWith(prefix string) bool {
	cur := this.root
	for _, c := range prefix {
		c -= 'a'
		if cur.son[c] == nil {
			return false
		}
		cur = cur.son[c]
	}

	return true
}
