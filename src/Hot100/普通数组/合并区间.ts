/**
 * 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
 * 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
 */

// function merge(intervals: number[][]): number[][] {
//   const res: number[][] = []

//   // 按起点升序 如果起点相同按终点降序
//   intervals.sort((a, b) => {
//     if (a[0] === b[0]) {
//       return b[1] - a[1]
//     }
//     return a[0] - b[0]
//   })

//   // 双指针
//   let left = intervals[0][0], right = intervals[0][1]

//   for (let i = 1; i < intervals.length; i++) {
//     const interval = intervals[i]
//     // case1 覆盖
//     if (right >= interval[1]) {
//       // 继续走，不用更新区间
//       continue
//     }
//     // case2 相交
//     if (interval[0] <= right && right <= interval[1]) {
//       // 更新一下右边
//       right = interval[1]
//     }
//     // case3 相离
//     if (interval[0] > right) {
//       // 更新res
//       res.push([left, right])
//       left = interval[0]
//       right = interval[1]
//     }
//   }

//   res.push([left, right])

//   return res
// };


function merge(intervals: number[][]): number[][] {
  // 排序一下
  // 按照起点升序，如果起点相同按照终点降序
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    }
    return a[0] - b[0]
  })

  const res: number[][] = []
  res.push(intervals[0])

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]
    // 去找前一个终点
    const last = res[res.length - 1]
    // 看有没交集
    // 有交集
    if (last[1] >= cur[0]) {
      // 合并
      last[1] = Math.max(last[1], cur[1])
    } else {
      res.push(cur)
    }
  }

  return res
};