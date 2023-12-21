function solution(a, b) {
  var answer = 0;

  if (a - b > 0) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  } else if (a - b < 0) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    answer = b;
  }
  return answer;
}
console.log(solution(3, 5));
