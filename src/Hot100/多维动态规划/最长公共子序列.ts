/**
 * 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。
 * 如果不存在 公共子序列 ，返回 0 。
 * 
 * 
 * 一个字符串的 子序列 是指这样一个新的字符串：
 * 它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
 */

function longestCommonSubsequence(text1: string, text2: string): number {
  // memo
  const memo: (number | null)[][] = Array.from({ length: text1.length }, () => new Array(text2.length).fill(null))
  // dp定义：返回 s1[i...] 和 s2[j...] 的最长公共子序列的长度
  const dp = (s1: string, i: number, s2: string, j: number): number => {
    // base case
    if (i >= s1.length || j >= s2.length) {
      return 0
    }

    if (memo[i][j] !== null) {
      return memo[i][j]
    }

    // 状态转移
    if (s1[i] === s2[j]) {
      memo[i][j] = dp(s1, i + 1, s2, j + 1) + 1
    } else {
      memo[i][j] = Math.max(dp(s1, i + 1, s2, j), dp(s1, i, s2, j + 1))
    }

    return memo[i][j]
  }

  return dp(text1, 0, text2, 0)
};