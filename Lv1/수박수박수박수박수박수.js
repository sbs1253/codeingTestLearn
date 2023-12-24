function solution(n) {
  var answer = '';
  let string = ['수', '박'];
  while (true) {
    for (var i = 0; i <= 1; i++) {
      if (n > 0) {
        answer += string[i];
        n -= 1;
      } else return answer;
    }
  }
}
