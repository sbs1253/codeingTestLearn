function solution(n) {
  let answer = [];
  let basic = Array(n ** 2)
    .fill(1)
    .map((e, i) => e + i);
  console.log(basic);
  for (let i = 0; i < n; i++) {
    answer.push(basic.splice(0, n));
  }
  // arr[0].map((_, i) => arr.map((row) => row[i]));
  console.log(answer);
  return answer;
}
console.log(solution(4));
