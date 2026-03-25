/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
 */

function letterCombinations(digits: string): string[] {
  const toChar = [
    [], // 0
    [], // 1
    ['a', 'b', 'c'], // 2
    ['d', 'e', 'f'], // 3
    ['g', 'h', 'i'], // 4
    ['j', 'k', 'l'], // 5
    ['m', 'n', 'o'], // 6
    ['p', 'q', 'r', 's'], // 7
    ['t', 'u', 'v'], // 8
    ['w', 'x', 'y', 'z'] // 9
  ]

  const res: string[] = []

  const backtrack = (track: string[], index: number) => {
    // base case
    if (track.length === digits.length) {
      res.push(track.join(""))
      return
    }

    const i = parseInt(digits[index])
    for (const char of toChar[i]) {
      // 选择
      track.push(char)
      backtrack(track, index + 1)
      // 撤销选择
      track.pop()
    }
  }

  backtrack([], 0)

  return res
};