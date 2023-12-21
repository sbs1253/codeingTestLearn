function solution(arr, divisor) {
  answer = arr.filter((e) => e % divisor === 0).sort((a, b) => a - b);
  return answer.length ? answer : (answer = [-1]);
}
