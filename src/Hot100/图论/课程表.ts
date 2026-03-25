/**
 * 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。
 * 
 * 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出
 * 其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学习课程  bi 。
 * 
 * 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
 * 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。
 */

// 拓扑排序
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  // 构造图结构
  const graph = buildGraph(numCourses, prerequisites)
  const indegrees = new Array(numCourses).fill(0)

  // 计算每个节点的入度
  for (let i = 0; i < numCourses; i++) {
    for (const to of graph[i]) {
      indegrees[to]++
    }
  }

  const q: number[] = []
  // 存储入度为0的节点
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) {
      q.push(i)
    }
  }

  // bfs
  while (q.length > 0) {
    const sz = q.length
    for (let i = 0; i < sz; i++) {
      const cur = q.shift()!
      for (const to of graph[cur]) {
        indegrees[to]--
        if (indegrees[to] === 0) {
          q.push(to)
        }
      }
    }
  }

  // 看有没有无法完成的
  for (const indegree of indegrees) {
    if (indegree !== 0) {
      return false
    }
  }

  return true
};

function buildGraph(n: number, prerequisites: number[][]): number[][] {
  const graph: number[][] = Array.from({ length: n }, () => [])

  for (const [to, from] of prerequisites) {
    graph[from].push(to)
  }

  return graph
}