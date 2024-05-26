function solution(storey) {
  let answer = 0;
  while (storey > 0) {
    let one = storey % 10;
    if (one > 5) {
      answer += 10 - one;
      storey += 10 - one;
    } else if (one < 5) {
      answer += one;
      storey -= one;
    } else {
      let ten = ~~(storey / 10) % 10;
      if (ten + 1 > 5) {
        answer += one;
        storey += one;
      } else {
        answer += one;
        storey -= one;
      }
    }
    storey /= 10;
    console.log(storey, answer);
  }
  return answer;
}
console.log(solution(16));
