/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 
 * 字母异位词：通过重新排列不同单词或短语的字母而形成的单词或短语，并使用所有原字母一次。
 */


function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()

  for (const str of strs) {
    // 对字符串按字符排序，当成 map 的 key
    const key = [...str].sort().join('')

    if (!map.has(key)) {
      map.set(key, [str])
    } else {
      map.get(key)?.push(str)
    }
  }

  return Array.from(map.values()) 
}