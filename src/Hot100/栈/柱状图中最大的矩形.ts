/**
 * 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。
 * 
 * 求在该柱状图中，能够勾勒出来的矩形的最大面积。
 */


/*
  思路：
  遍历每一个元素 --> 把每一个元素当作高
  利用单调栈的算法 找到 当前元素 上一个更小元素索引 以及 下一个更小元素索引
  从而得到区间 这个区间都是比这个元素大的元素 从而达到宽最长 然后就得到已当前元素为高的最大的矩形
  遍历下去进行比较得到最大面积
*/
function largestRectangleArea(heights: number[]): number {
  const n = heights.length
  // 保证区间是 [left[i], right[i]) 之间的差 --> right[i] - left[i] 就是宽了
  const left: number[] = new Array(n)
  const right: number[] = new Array(n)

  // 单调栈
  const stk: number[] = []

  // 构造left -> 上一个更小元素
  for (let i = 0; i < n; i++) {
    while (stk.length !== 0 && heights[stk[stk.length - 1]] >= heights[i]) {
      stk.pop()
    }
    left[i] = stk.length === 0 ? 0 : stk[stk.length - 1] + 1
    stk.push(i)
  }

  // 清空stk
  while (stk.length !== 0)
    stk.pop()

  // 构造right -> 下一个更小元素
  for (let i = n - 1; i >= 0; i--) {
    while (stk.length !== 0 && heights[stk[stk.length - 1]] >= heights[i]) {
      stk.pop()
    }
    right[i] = stk.length === 0 ? n : stk[stk.length - 1]
    stk.push(i)
  }

  // 存储结果
  let res = 0
  // 遍历每一个元素 都当作高
  for (let i = 0; i < n; i++) {
    const cur = heights[i] * (right[i] - left[i])
    res = cur > res ? cur : res
  }

  return res
}