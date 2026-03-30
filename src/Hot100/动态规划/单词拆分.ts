/**
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。
 * 如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。
 * 
 * 注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。
 */

// 回溯解法
// function wordBreak(s: string, wordDict: string[]): boolean {

//   // 备忘录
//   // 记录无法切割的串
//   const memo: Set<string> = new Set<string>()

//   let found = false
//   // i记录当前索引
//   const backtrack = (i: number) => {
//     if (found) {
//       return
//     }
//     if (i === s.length) {
//       found = true
//       return
//     }

//     // 后缀
//     const suffix = s.substring(i)
//     if (memo.has(suffix)) {
//       return
//     }

//     // 选择
//     for (const word of wordDict) {
//       const len = word.length
//       if (i + len <= s.length && s.substring(i, i + len) === word) {
//         backtrack(i + len)
//       }
//     }

//     // 后序位置
//     if (!found) {
//       memo.add(suffix)
//     }
//   }

//   backtrack(0)
//   return found
// };

// dp解法
function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict)
  // -1 还没拼; 0 拼不了; 1 可以拼
  const memo = new Array(s.length).fill(-1)
  // dp定义：s[i...]能用wordDict中的拼接出来否
  const dp = (i: number): boolean => {
    // base case
    // 空串
    if (i === s.length) {
      return true
    }

    if (memo[i] !== -1) {
      return memo[i] === 0 ? false : true
    }

    for (let j = i + 1; j <= s.length; j++) {
      // [i...]的前缀
      const prefix = s.substring(i, j)
      // dict中有这个前缀
      if (wordSet.has(prefix)) {
        // 只要[j...]能拼出来就行
        if (dp(j)) {
          memo[j] = 1
          return true
        }
      }
    }

    // s[i..] 无法被拼出
    memo[i] = 0
    return false
  }

  return dp(0)
};