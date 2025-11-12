/**
 * 给定一个整数数组 temperatures ，表示每天的温度
 * 返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。
 * 如果气温在这之后都不会升高，请在该位置用 0 来代替。
 */


function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length
  const answer: number[] = new Array(n)
  const stk: number[] = []

  for (let i = n - 1; i >= 0; i--) {
    while (stk.length !== 0 && temperatures[stk[stk.length - 1]] <= temperatures[i]) {
      stk.pop()
    }
    answer[i] = stk.length === 0 ? 0 : (stk[stk.length - 1] - i)
    stk.push(i)
  }


  return answer
}