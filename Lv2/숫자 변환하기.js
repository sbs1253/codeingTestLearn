function solution(x, y, n) {
  let visited = new Set();
  let que = [[x, 0]];
  let index = 0;
  while (que.length > index) {
    const [X, count] = que[index++];
    if (visited.has(X)) continue;
    visited.add(X);

    if (X === y) return count;
    if (!visited.has(X + n) && X + n <= y) que.push([X + n, count + 1]);
    if (!visited.has(X * 2) && X * 2 <= y) que.push([X * 2, count + 1]);
    if (!visited.has(X * 3) && X * 3 <= y) que.push([X * 3, count + 1]);
  }
  return -1;
}
console.log(solution(10, 40, 5));
