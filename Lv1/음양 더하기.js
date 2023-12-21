function solution(absolutes, signs) {
  var answer = absolutes
    .map((e, i) => {
      return signs[i] ? e : -e;
    })
    .reduce((a, b) => a + b);
  return answer;
}
