function solution(maps) {
  let answer = 0;
  let startX = 0;
  let startY = 0;
  let len = 1;
  let start = [[startX, startY, len]];
  let run = [
    [1, 0],
    [-1, 0],
    [0, -1],
    [0, 1],
  ];
  let que = new Set();
  que.add(`${startX},${startY}`);
  while (start.length > 0) {
    let [x, y, r] = start.shift();
    if (x == maps.length - 1 && y == maps[0].length - 1) {
      answer = r;
      break;
    }
    for (const [dx, dy] of run) {
      let goX = x + dx;
      let goY = y + dy;
      if (goX <= maps.length - 1 && goX >= 0 && goY <= maps[0].length - 1 && goY >= 0 && maps[goX][goY] === 1) {
        if (!que.has(`${goX},${goY}`)) {
          que.add(`${goX},${goY}`);
          start.push([goX, goY, r + 1]);
        }
      }
    }
    console.log(que);
  }
  return answer !== 0 ? answer : -1;
}
console.log(
  solution([
    [1, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
  ])
);
