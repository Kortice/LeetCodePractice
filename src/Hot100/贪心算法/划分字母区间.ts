/**
 * 给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。例如，字符串 "ababcc" 能够被分为 ["abab", "cc"]，但类似 ["aba", "bcc"] 或 ["ab", "ab", "cc"] 的划分是非法的。
 * 
 * 注意，划分结果需要满足：将所有划分结果按顺序连接，得到的字符串仍然是 s 。
 * 
 * 返回一个表示每个字符串片段的长度的列表。
 */

function partitionLabels(s: string): number[] {
  const n = s.length
  const last = new Array(26)
  // 记录字母最后出现的位置
  for (let i = 0; i < n; i++) {
    last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i
  }

  // 合并区间
  const ans = []
  let start = 0, end = 0
  for (let i = 0; i < n; i++) {
    // 更新右端点
    end = Math.max(end, last[s.charCodeAt(i) - 'a'.charCodeAt(0)])
    if (i === end) {
      ans.push(end - start + 1)
      start = end + 1
    }
  }

  return ans
};