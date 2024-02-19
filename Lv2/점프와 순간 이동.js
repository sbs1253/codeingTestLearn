function solution(n) {
  let ans = 1;

  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n -= 1;
      ans += 1;
    }
  }
  return ans;
}
console.log(solution(5));
