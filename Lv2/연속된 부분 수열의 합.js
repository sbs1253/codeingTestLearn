function solution(sequence, k) {
  let answer = {};
  let start = 0;
  let end = 0;
  let num = sequence[start];
  while (start < sequence.length && end < sequence.length) {
    if (num == k) {
      if (!answer[end - start]) answer[end - start] = [start, end];
      num -= sequence[start];
      start++;
    } else if (num > k) {
      if (start < sequence.length) {
        num -= sequence[start];
        start++;
      }
      continue;
    } else {
      end++;
      if (end < sequence.length) {
        num += sequence[end];
      }
    }
  }
  return answer[Object.keys(answer)[0]];
}
console.log(solution([2, 2, 2, 2, 2], 6));
