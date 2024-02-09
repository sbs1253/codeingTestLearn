function solution(n) {
  var answer = 0;
  let one = n.toString(2).replace(/0/g, '').length;
  for (var i = 1; i <= n; i++) {
    let num = n + i;
    if (num.toString(2).toString(2).replace(/0/g, '').length === one) {
      answer = num;
      break;
    }
  }
  return answer;
}
console.log(solution(78));
