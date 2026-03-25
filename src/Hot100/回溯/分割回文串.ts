/**
 * 给你一个字符串 s，请你将 s 分割成一些 子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。
 */

function partition(s: string): string[][] {
  const res: string[][] = []

  // index 作为字串的起点
  const backtrack = (track: string[], index: number) => {
    // base case
    if (index === s.length) {
      res.push([...track])
      return
    }

    for (let i = index; i < s.length; i++) {
      // [index, i+1) => [index, i]
      const substr = s.substring(index, i + 1)
      if (!check(substr)) {
        continue
      }

      track.push(substr)
      backtrack(track, i + 1)
      track.pop()
    }
  }

  backtrack([], 0)

  return res
};

// 查看str是不是回文串
function check(str: string): boolean {
  let left = 0, right = str.length - 1
  while (left <= right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }

  return true
}