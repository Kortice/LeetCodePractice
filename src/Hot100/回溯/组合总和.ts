/**
 * 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target 
 * 找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。
 * 你可以按 任意顺序 返回这些组合。
 * 
 * candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。
 */

// 不可重复可复选的子集
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = []

  const backtrack = (track: number[], start: number) => {
    // base case
    if (target === 0) {
      res.push([...track])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      if (target - candidates[i] < 0) {
        continue
      }

      // 做选择
      track.push(candidates[i])
      target -= candidates[i]
      backtrack(track, i)
      // 撤销选择
      target += candidates[i]
      track.pop()
    }
  }

  backtrack([], 0)

  return res
};