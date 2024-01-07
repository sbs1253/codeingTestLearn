function solution(n, m) {
  let GCD = 0;
  for (var i = n; i >= 1; i--) {
    if (n % i === 0 && m % i === 0) {
      GCD = i;
      break;
    }
  }
  answer = [GCD, (n * m) / GCD];

  return answer;
}
