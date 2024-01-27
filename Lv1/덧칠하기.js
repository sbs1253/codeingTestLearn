function solution(n, m, section) {
  let answer = 0;
  let arr = Array(n).fill(0);
  section.forEach((e) => {
    arr[e - 1] += 1;
  });
  let roller = Array(m).fill(0);
  while (arr.indexOf(1) !== -1) {
    arr.splice(arr.indexOf(1), m, ...roller);
    answer += 1;
  }
  return answer;
}
console.log(solution(100, 4, [1, 2, 3, 5]));
