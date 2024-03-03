function solution(citations) {
  let answer = 0;
  let arr = citations.sort((a, b) => b - a);
  arr.forEach((e, i) => {
    if (e > i) answer += 1;
  });
  return answer;
}
console.log(solution([1, 1, 1, 2, 3, 6]));
