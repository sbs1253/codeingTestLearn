function solution(s) {
  let answer = [0, 0];
  let string = s;
  while (string != '1') {
    let result = '';
    answer[0] += 1;
    result = string.replace(/0/g, '');
    answer[1] += string.length - result.length;
    string = result.length.toString(2);
  }
  return answer;
}
console.log(solution('110010101001'));
