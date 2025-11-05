/**
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
 * 
 * 字母异位词是通过重新排列不同单词或短语的字母而形成的单词或短语，并使用所有原字母一次。
 */

function findAnagrams(s: string, p: string): number[] {
  const need = new Map<string, number>()
  const window = new Map<string, number>()

  for (const char of p)
    need.set(char, (need.get(char) || 0) + 1)

  let left = 0, right = 0
  let valid = 0
  const res: number[] = []

  while (right < s.length) {
    const c = s[right]
    right++

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1)
      if (window.get(c) === need.get(c)) {
        valid++
      }
    }

    console.log(s.substring(left, right))

    while (right - left >= p.length) {

      if (valid === need.size) {
        res.push(left)
      }

      const d = s[left]
      left++

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--
        }
        window.set(d, window.get(d)! - 1)
      }
    }
  }


  return res
}