function solution(n) {
  let answer = 0;
  let arr = Array(n + 1).fill(0);
  arr[1] = 1;
  arr.forEach((_, i) => {
    if (i > 1) {
      arr[i] = ((arr[i - 1] % 1234567) + (arr[i - 2] % 1234567)) % 1234567;
    }
  });
  answer = arr[n];
  return answer;
}
console.log(solution(4));
