/**
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 */

function generateParenthesis(n: number): string[] {
  const res: string[] = []

  // track记录路径 leftCount记录当前track中可用的'('数 complete记录当前track中成对的"()"数
  const backtarck = (track: string[], leftCount: number, complete: number) => {
    if (complete === n) {
      res.push(track.join(""))
      return
    }

    for (const choice of ['(', ')']) {
      if (choice === '(') {
        if (complete + leftCount < n) {
          track.push(choice)
          backtarck(track, leftCount + 1, complete)
          track.pop()
        }
        continue
      } else if (choice === ')') {
        if (leftCount > 0) {
          track.push(choice)
          backtarck(track, leftCount - 1, complete + 1)
          track.pop()
        }
        continue
      }
    }
  }

  backtarck([], 0, 0)

  return res
};