/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 * 
 * 算法的时间复杂度应该为 O(log (m+n)) 。
 */

// 分成两堆一样多的数，左边最大小于右边最小，这两个最值就是中位数相关的参数
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // 小的当nums1
  // 方便切割
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1)
  }

  const m = nums1.length
  const n = nums2.length

  let left = 0, right = m
  while (left <= right) {
    // nums1切的地方
    const i = left + Math.floor((right - left) / 2)
    // nums2切的地方 
    // 用 (m+n+1)/2 奇偶数长度(m+n的长度)都可以写
    const j = Math.floor((m + n + 1) / 2) - i

    // 切割处周围的四个数
    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1]
    const nums1RightMin = i === m ? Infinity : nums1[i]
    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1]
    const nums2RightMin = j === n ? Infinity : nums2[j]

    // 如果符合条件
    if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      // 如果是奇数长
      if ((m + n) % 2 === 1) {
        return Math.max(nums1LeftMax, nums2LeftMax)
      } else { // 偶数长度
        return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2
      }
    } else if (nums1LeftMax > nums2RightMin) { // 切的太右边了，往左边靠
      right = i - 1
    } else if (nums2LeftMax > nums1RightMin) { // 切的太左边了，往右边靠
      left = i + 1
    }
  }

  // 一般走不到这，因为题目保证有中位数
  return 114514
};