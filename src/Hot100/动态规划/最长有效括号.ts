/**
 * 给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号 子串 的长度。
 * 
 * 左右括号匹配，即每个左括号都有对应的右括号将其闭合的字符串是格式正确的，比如 "(()())"。
 */

function longestValidParentheses(s: string): number {
  const n = s.length
  // dp定义：dp[i]为以s[i]结尾的最长有效字串长度
  // 默认是0

  if (n === 0) {
    return 0
  }

  const dp: number[] = new Array(n).fill(0)
  // base case dp[0] = 0

  let res = dp[0]
  // 状态转移
  for (let i = 1; i < n; i++) {
    // 状态保持不变
    if (s[i] === '(') {
      continue
    } else if (s[i] === ')') {
      // 如果是 ')' 

      if (s[i - 1] === '(') {
        // ...()的形式
        dp[i] = (dp[i - 2] || 0) + 2
      } else if (s[i - 1] === ')') {
        // ...))的形式

        // 去前面找匹配的 '('
        const preIndex = i - dp[i - 1] - 1
        if (preIndex >= 0 && s[preIndex] === '(') {
          dp[i] = dp[i - 1] + 2 + (dp[preIndex - 1] || 0)
        }
      }
    }
    res = Math.max(res, dp[i])
  }

  return res
};