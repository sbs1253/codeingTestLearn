function solution(n) {
  let arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = ((arr[i - 1] % 1000000007) + (arr[i - 2] % 1000000007)) % 1000000007;
  }
  return arr.pop();
}
console.log(solution(4));
