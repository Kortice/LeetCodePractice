/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 
 * 1. 左括号必须用相同类型的右括号闭合
 * 2. 左括号必须以正确的顺序闭合。
 * 3. 每个右括号都有一个对应的相同类型的左括号。
 */

// 因为右括号要和最近的左括号匹配，也就是左括号满足 后面的先匹配 ==> FILO 用栈存储左括号 然后去匹配右括号
function isValid(s: string): boolean {
  // 用来存储左括号的栈
  const left: string[] = []

  for (const c of s) {
    if (c === '(' || c === '{' || c === '[')
      left.push(c)
    else {
      // 说明前面有左括号
      if (left.length !== 0) {
        const mapLeft = mapping(c)
        if (mapLeft !== left.pop()) {
          return false
        }
      } else {
        return false
      }
    }
  }

  return left.length === 0
}

function mapping(char: string): string | undefined {
  if (char === ')') return '('
  if (char === ']') return '['
  if (char === '}') return '{'
}