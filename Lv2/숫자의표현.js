function solution(n) {
  let answer = 1;
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    let result = i;
    for (let j = i + 1; j <= Math.ceil(n / 2); j++) {
      result += j;
      if (result == n) {
        answer += 1;
        break;
      } else if (result > n) break;
    }
  }
  return answer;
}
console.log(solution(15));
