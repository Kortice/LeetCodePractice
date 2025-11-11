/**
 * 
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。
 * 
 * 测试用例保证输出的长度不会超过 105。
 */

// 在 [ 时保存状态，在 ] 时恢复并拼接。
function decodeString(s: string): string {
  const timeStk: number[] = []
  const strStk: string[] = []

  let str: string = ''
  let time: number = 0

  for (let i = 0; i < s.length; i++) {
    if ('0' <= s[i] && s[i] <= '9') { // 如果是数字
      time = time * 10 + s.charCodeAt(i) - 48
    } else if (s[i] === '[') { // 如果是 [
      timeStk.push(time)
      strStk.push(str)
      time = 0
      str = ''
    } else if (s[i] === ']') { // 如果是 ]
      const t = timeStk.pop()
      const s = strStk.pop()
      str = s + str.repeat(t!)
    } else { // 是字母
      str += s[i]
    }
  }

  return str
}