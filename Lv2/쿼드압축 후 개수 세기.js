function solution(arr) {
  let answer = [];

  function cal(array, index, size = arr.length) {
    let x = 0;
    let idx = 0;
    while (idx <= size) {
      let first = array[x][x];
      for (let i = x; i < index; i++) {
        for (let j = 0; j <= x; j++) {
          // if (first !== array[x][j]) {
          //   break;
          // }
        }
        console.log(i, size, idx);
      }
      idx++;
    }
  }
  cal(arr, arr.length);

  return answer;
}
console.log(
  solution([
    [1, 1, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ])
);
