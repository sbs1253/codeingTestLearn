function solution(park, routes) {
  let start;
  let run = {
    N: [-1, 0],
    S: [1, 0],
    W: [0, -1],
    E: [0, 1],
  };
  let maps = park.map((e, i) => {
    if (e.indexOf('S') !== -1) start = [i, e.indexOf('S')];
    return e.split('');
  });
  for (let i = 0; i < routes.length; i++) {
    let [direct, time] = routes[i].split(' ');
    let [x, y] = [start[0], start[1]];
    for (let j = 0; j < time; j++) {
      x += run[direct][0];
      y += run[direct][1];
      if (x < 0 || y < 0 || x > maps.length - 1 || y > maps[0].length - 1 || maps[x][y] == 'X') {
        [x, y] = [start[0], start[1]];
        break;
      }
    }
    start = [x, y];
  }
  return start;
}

console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
