/**
 * 请你实现 Trie 类：
 * 
 * Trie() 初始化前缀树对象。
 * void insert(String word) 向前缀树中插入字符串 word 。
 * boolean search(String word) 如果字符串 word 在前缀树中，返回 true（即，在检索之前已经插入）；否则，返回 false 。
 * boolean startsWith(String prefix) 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true ；否则，返回 false 。
 * 
 * word 和 prefix 仅由小写英文字母组成
 */

class TrieNode {
  flag: boolean
  children: (TrieNode | null)[]

  constructor() {
    this.flag = false
    this.children = new Array(26).fill(null)
  }
}

class Trie {
  root: TrieNode | null

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    this._insert(this.root, word, 0)
  }

  // 向以 node 为根的树插入word[i...]，并返回根节点
  _insert(node: TrieNode | null, word: string, i: number): TrieNode {
    if (node === null) {
      // 不存在节点，创建节点
      node = new TrieNode()
    }
    if (i === word.length) {
      node.flag = true
      return node
    }
    const c = word.charCodeAt(i) - 'a'.charCodeAt(0)
    node.children[c] = this._insert(node.children[c], word, i + 1)

    return node
  }

  search(word: string): boolean {
    let p = this.root
    for (let i = 0; i < word.length; i++) {
      if (p === null) {
        return false
      }
      const c = word.charCodeAt(i) - 'a'.charCodeAt(0)
      p = p.children[c]
    }

    if (p === null || !p.flag) {
      return false
    }

    return true
  }

  startsWith(prefix: string): boolean {
    let p = this.root
    for (let i = 0; i < prefix.length; i++) {
      if (p === null) {
        return false
      }
      const c = prefix.charCodeAt(i) - 'a'.charCodeAt(0)
      p = p.children[c]
    }

    return p !== null
  }
}