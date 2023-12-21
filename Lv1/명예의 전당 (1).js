function solution(k, score) {
  let answer = [];
  let array = [];
  score.forEach((element) => {
    if (array.length >= k) {
      array.push(element);
      array.sort((a, b) => b - a);
      answer.push(array[k - 1]);
    } else {
      array.push(element);
      answer.push(Math.min(...array));
    }
  });
  return answer;
}
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
