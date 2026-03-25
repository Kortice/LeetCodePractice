/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 */

// 标准的回溯
function permute(nums: number[]): number[][] {
  const res: number[][] = []

  // track 收集结果
  // visited 防止重复
  const backtrack = (track: number[], visited: boolean[]) => {
    // base case
    if (track.length === nums.length) {
      res.push([...track])
    }

    for (const num of nums) {
      // 用过了
      if (visited[num]) {
        continue
      }

      // 做选择
      track.push(num)
      visited[num] = true

      backtrack(track, visited)

      // 撤销选择
      visited[num] = false
      track.pop()
    }

  }

  backtrack([], [])

  return res
};