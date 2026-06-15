package graphtheory

func canFinish(numCourses int, prerequisites [][]int) bool {
	graph := buildGraph(numCourses, prerequisites)

	// bfs

	// 入度
	indegree := make([]int, numCourses)
	for _, edge := range prerequisites {
		indegree[edge[0]]++
	}

	// init queue
	var q []int
	for i := range indegree {
		if indegree[i] == 0 {
			q = append(q, i)
		}
	}

	// bfs
	count := 0
	for len(q) > 0 {
		sz := len(q)
		for range sz {
			cur := q[0]
			q = q[1:]
			count++

			for _, to := range graph[cur] {
				indegree[to]--
				if indegree[to] == 0 {
					q = append(q, to)
				}
			}
		}
	}

	return count == numCourses
}

// buildGraph 构造邻接表（稀疏图，故使用邻接表）
func buildGraph(numCourses int, prerequisites [][]int) [][]int {
	graph := make([][]int, numCourses)
	for i := range graph {
		graph[i] = []int{}
	}

	for _, edge := range prerequisites {
		from, to := edge[1], edge[0]
		graph[from] = append(graph[from], to)
	}

	return graph
}
