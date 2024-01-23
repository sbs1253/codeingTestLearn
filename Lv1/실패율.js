function solution(N, stages) {
  let answer = [];
  let arr = Array(N).fill(0);
  let obj = {};
  let num = stages.length;

  stages.forEach((e) => {
    arr[e - 1] += 1;
  });
  for (let i = 0; i < N; i++) {
    obj[i + 1] = arr[i] / num;
    num -= arr[i];
  }
  let stage = Object.entries(obj).sort(([, a], [, b]) => b - a);
  stage.forEach((e) => {
    answer.push(+e[0]);
  });
  return answer;
}
console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
