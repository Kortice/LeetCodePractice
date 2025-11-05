/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
 */

function lengthOfLongestSubstring(s: string): number {
  const window = new Map<string, number>()

  let left = 0, right = 0
  let len = 0

  while (right < s.length) {
    const c = s[right]
    right++
    window.set(c, (window.get(c) || 0) + 1)

    while (window.get(c)! > 1) {
      const d = s[left]
      left++
      window.set(d, window.get(d)! - 1)
    }

    len = right - left > len ? right - left : len
  }

  return len
}