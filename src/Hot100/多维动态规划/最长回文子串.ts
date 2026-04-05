/**
 * 给你一个字符串 s，找到 s 中最长的 回文 子串。
 * 
 * 子字符串 是字符串中连续的 非空 字符序列。
 */

// 双指针
function longestPalindrome(s: string): string {
  const n = s.length
  let res: string = ""
  for (let i = 0; i < n; i++) {
    // 以i为中心
    const palindrome1 = helper(s, i, i)
    // 以i,i+1为中心
    const palindrome2 = helper(s, i, i + 1)

    res = res.length > palindrome1.length ? res : palindrome1
    res = res.length > palindrome2.length ? res : palindrome2
  }

  return res
};

// 返回 s 中以 i,j 为中心的最长回文子串
function helper(s: string, i: number, j: number): string {
  const n = s.length
  let left = i, right = j
  while (left >= 0 && right < n) {
    if (s[left] !== s[right]) {
      break
    }
    left--
    right++
  }

  return s.substring(left + 1, right)
}