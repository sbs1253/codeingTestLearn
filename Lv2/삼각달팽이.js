function solution(n) {
  let answer = [];
  let arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
  let run = [0, 0];
  let right = [0, 1];
  let left = [0, -1];
  let up = [1, 0];
  let down = [-1, 0];
  let num = 1;
  for (let i = 0; i < 10; i++) {
    if (run[0] < arr.length - 1 && arr[run[0]][run[1]] == 0) {
      arr[run[0]][run[1]] = num;
      run[0] += up[0];
      run[1] += up[1];
      num++;
    } else if (run[0] == arr.length - 1 && arr[run[0]][run[1]] == 0) {
      arr[run[0]][run[1]] = num;
      if (arr[run[0]][run[1] + 1] == 0) {
        run[0] += right[0];
        run[1] += right[1];
      }
      num++;
    } else {
      run[0] += down[0] + left[0];
      run[1] += down[1] + left[1];
      // console.log(run);
      arr[run[0]][run[1]] = num;
      num++;
    }
    console.log(arr);
  }
  return answer;
}
console.log(solution(4));
// [1,2,9,3,10,8,4,5,6,7]
