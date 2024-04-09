function solution(wallpaper) {
  let answer;
  let arr = [];
  let dx = [];
  let dy = [];
  wallpaper.forEach((e) => {
    arr.push([...e]);
  });
  arr.forEach((e, i) => {
    e.forEach((el, ix) => {
      if (el === '#') {
        dx.push(i);
        dy.push(ix);
      }
    });
  });
  let minXY = [Math.min(...dx), Math.min(...dy)];
  let maxXY = [Math.max(...dx) + 1, Math.max(...dy) + 1];

  answer = [...minXY, ...maxXY];
  return answer;
}
console.log(solution(['..........', '.....#....', '......##..', '...##.....', '....#.....']));
