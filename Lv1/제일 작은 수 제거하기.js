function solution(arr) {
  var answer = [];
  answer = arr.filter((e) => e !== Math.min(...arr));
  return answer.length > 0 ? answer : [-1];
}
