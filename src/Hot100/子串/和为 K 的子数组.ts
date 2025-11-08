/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 
 * 子数组是数组中元素的连续非空序列。
 */

/**
 * 也就是找 preSum[i] - preSum[j] === k 其中 i > j
 *  need = preSum[j] = preSum[i] - k
 * 
 */

// 符合要求的子数组和 --> 前缀和数组 + 哈希表
function subarraySum(nums: number[], k: number): number {
  // 前缀和数组
  const preSum = new Array(nums.length + 1).fill(0)
  // need 计数器
  const count = new Map<number, number>()
  count.set(0, 1)

  let res = 0
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1] // 前缀和
    const need = preSum[i] - k

    // 如果前面有 need 说明存在以 preSum[i-1] 为右边界的区间 内的子数组 满足条件
    // [need 的 index , i-1] 区间 
    // 有几个 need 就有几个满足的子数组 所以需要 count
    if (count.has(need)) {
      res += count.get(need)!
    }

    count.set(preSum[i], (count.get(preSum[i]) || 0) + 1)
  }

  return res
}
