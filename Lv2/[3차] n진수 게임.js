function solution(n, t, m, p) {
  let answer = '0';
  let num = t * m;
  let resultNum = '';

  for (let i = 0; i < num; i++) {
    if (answer.length < t * m) answer += i.toString(n);
  }
  for (let i = p; i <= num; i += m) {
    resultNum += answer[i];
  }
  return resultNum.toUpperCase();
}
console.log(solution(16, 16, 2, 2));
