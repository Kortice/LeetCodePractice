/**
 * 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。
 * 
 * 你可以对一个单词进行如下三种操作：
 * 
 * 插入一个字符
 * 删除一个字符
 * 替换一个字符
 */

function minDistance(word1: string, word2: string): number {
  const m = word1.length, n = word2.length
  // memo
  const memo: (number | null)[][] = Array.from({ length: m }, () => new Array(n).fill(null))

  // dp定义：dp(s1, i, s2, j) s1[...i] 变成 s2[...j] 所使用的最少操作数
  const dp = (s1: string, i: number, s2: string, j: number): number => {
    // base case

    // 给 s1 插入 j+1 个
    if (i < 0 && j >= 0) {
      return j + 1
    }
    // 给 s1 删除 i+1 个
    if (i >= 0 && j < 0) {
      return i + 1
    }

    if (i < 0 && j < 0) {
      return 0
    }

    // 如果之前算过了
    if (memo[i][j] !== null) {
      return memo[i][j]
    }

    // 如果相同就跳过
    if (s1[i] === s2[j]) {
      memo[i][j] = dp(s1, i - 1, s2, j - 1)
    } else {
      // 不相同

      // 状态转移

      // 插入一个字符
      // 删除一个字符
      // 替换一个字符

      memo[i][j] = Math.min(
        dp(s1, i, s2, j - 1),
        dp(s1, i - 1, s2, j),
        dp(s1, i - 1, s2, j - 1)
      ) + 1
    }

    return memo[i][j]
  }

  return dp(word1, m - 1, word2, n - 1)
};