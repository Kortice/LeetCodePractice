/**
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 
 * 注意：
 * 
 * 对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
 * 如果 s 中存在这样的子串，我们保证它是唯一的答案。
 */

// 子数组问题 - 滑动窗口
function minWindow(s: string, t: string): string {
  const need = new Map<string, number>() // 覆盖子串
  const window = new Map<string, number>() // 窗口里面字符计数器

  // 初始化 need
  for (let char of t)
    need.set(char, (need.get(char) || 0) + 1)

  let left = 0, right = 0
  let valid = 0 // 记录 window 是否已经满足 need
  let start = 0, len = Infinity // 字串的数据

  // 滑动窗口结构
  while (right < s.length) {
    // 进入窗口的字符
    const c = s[right]
    // 扩大窗口
    right++
    // 更新窗口数据
    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1)
      if (window.get(c) === need.get(c)) // 一个字符已经覆盖完了
        valid++
    }

    // 判断是否需要收缩窗口
    while (valid === need.size) {
      // 更新覆盖字串数据
      if (right - left <= len) {
        start = left
        len = right - left
      }

      // 移除窗口的字符
      const d = s[left]
      // 缩小窗口
      left++
      // 更新窗口的数据
      if (need.has(d)) {
        if (window.get(d) === need.get(d))
          valid--
        window.set(d, window.get(d)! - 1)
      }
    }
  }

  return len === Infinity ? "" : s.substring(start, start + len)
}