/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */

// 子集问题
// 子集里面的元素是具有无序性的，那在全排列的基础上敲定元素的顺序，就是加上这个限制，就可以变成子集
function subsets(nums: number[]): number[][] {
  const res: number[][] = []

  // track 收集路径
  // start 用来敲定顺序 只能遍历 索引start以后的东西
  const backtrack = (track: number[], start: number) => {
    // base case
    res.push([...track])

    for (let i = start; i < nums.length; i++) {
      // 做选择
      track.push(nums[i])
      backtrack(track, i + 1)
      // 撤销选择
      track.pop()
    }
  }

  backtrack([], 0)

  return res
};