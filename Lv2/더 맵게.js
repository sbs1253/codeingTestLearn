function solution(scoville, K) {
  let answer = 0;
  let sortArr = scoville.sort((a, b) => a - b);
  while (sortArr[0] <= K) {
    let [a, b] = sortArr.splice(0, 2);
    sortArr.push(a + b * 2);
    sortArr = sortArr.sort((a, b) => a - b);
    answer++;
  }
  return answer;
}
console.log(solution([1, 2, 3, 9, 10, 12], 7));
