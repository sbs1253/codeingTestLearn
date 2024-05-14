function solution(n) {
  let arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
  let x = 0;
  let y = 0;
  let run = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];
  let count = n;
  let runCount = 0;
  let num = 1;
  while (count >= 1) {
    let go = run.shift();
    for (let i = 1; i < count; i++) {
      arr[x][y] = num;
      num++;
      x += go[0];
      y += go[1];
    }
    count = n - runCount;
    runCount++;
    run.push(go);
  }
  arr[x][y] = num;
  return arr.flat();
}
console.log(solution(6));
// [1,2,9,3,10,8,4,5,6,7]
