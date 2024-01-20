function solution(t, p) {
  let answer = 0;
  let arr = [];
  for (var i = 0; i < t.length; i++) {
    if (t.length - i >= p.length) arr[i] = t.slice(i, i + p.length);
  }

  answer = arr.filter((e) => +e <= +p).length;
  return answer;
}
