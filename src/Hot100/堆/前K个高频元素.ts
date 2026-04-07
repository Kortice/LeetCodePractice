/**
 * 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。
 */

import { PriorityQueue } from "@datastructures-js/priority-queue";

function topKFrequent(nums: number[], k: number): number[] {
  // pair -> [num, frequence]
  // 按照频率从大到小排序
  const pq = new PriorityQueue<number[]>((a, b) => b[1] - a[1])

  const numToFrequence = new Map<number, number>()

  for (const num of nums) {
    numToFrequence.set(num, (numToFrequence.get(num) || 0) + 1)
  }

  const set = new Set(nums)

  for (const key of set.keys()) {
    pq.push([key, numToFrequence.get(key)!])
  }

  let res: number[] = []

  for (let i = 0; i < k; i++) {
    res.push(pq.pop()![0])
  }

  return res
};