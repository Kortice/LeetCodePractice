/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 
 * 字母异位词：通过重新排列不同单词或短语的字母而形成的单词或短语，并使用所有原字母一次。
 */


function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()

  for (let k in strs) {
    let str = strs[k]
    let charArray: string[] = [] //提取出单个字符
    for (let i = 0; i < str.length; i++) {
      charArray.push(str[i])
    }
    charArray.sort() // 对字符串本身按字符排序 当作 map 的 key

    const mapKey = charArray.toString()
    if (map.has(mapKey)) {
      map.get(mapKey)?.push(str)
    } else {
      map.set(mapKey, [str])
    }

  }

  const res: string[][] = []

  map.forEach((value) => {
    console.log(value)
    res.push(value)
  })

  return res
}