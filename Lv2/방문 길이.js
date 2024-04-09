function solution(dirs) {
  let answer = 0;
  let run = {
    U: [1, 0],
    D: [-1, 0],
    R: [0, 1],
    L: [0, -1],
  };
  let start = [0, 0];
  let maps = new Set();
  for (let i = 0; i < dirs.length; i++) {
    let [x, y] = run[dirs[i]];
    let [startX, startY] = [start[0], start[1]];
    startX += x;
    startY += y;
    if (startX < -5 || startY < -5 || startX > 5 || startY > 5) {
      continue;
    }

    maps.add(start[0] + ',' + start[1] + ',' + startX + ',' + startY);
    maps.add(start[1] + ',' + start[0] + ',' + startY + ',' + startX);

    start = [startX, startY];
  }

  return maps.size / 2;
}
console.log(solution('UDLRDURL'));
