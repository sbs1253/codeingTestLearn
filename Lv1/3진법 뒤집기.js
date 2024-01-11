function solution(n) {
  var answer = 0;
  let num = [...n.toString(3)].reverse().join('');
  answer = parseInt(num, 3);
  return answer;
}
