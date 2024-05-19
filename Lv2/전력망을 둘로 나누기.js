function solution(n, wires) {
  let answer = n; // 가능한 가장 큰 수로 초기화
  for (let i = 0; i < wires.length; i++) {
    const graph = Array.from(Array(n + 1), () => []);
    wires.forEach(([a, b], index) => {
      if (i !== index) {
        graph[a].push(b);
        graph[b].push(a);
      }
    });
    const visited = Array(n + 1).fill(false);
    let nodesCount = dfs(1, visited, graph);
    let diff = Math.abs(n - 2 * nodesCount);
    answer = Math.min(answer, diff);
  }

  function dfs(start, visited, graph) {
    visited[start] = true;
    let nodes = 1;
    for (let next of graph[start]) {
      if (!visited[next]) {
        nodes += dfs(next, visited, graph);
      }
    }
    return nodes;
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
