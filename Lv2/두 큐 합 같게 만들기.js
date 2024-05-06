function solution(queue1, queue2) {
  let answer = 0;
  let result1 = queue1.reduce((acc, cur) => acc + cur);
  let result2 = queue2.reduce((acc, cur) => acc + cur);

  if ((result1 + result2) % 2 === 1) return -1;

  let limit = 2 * (queue1.length + queue2.length);
  // 한번씩 값이 바뀌고 다시 원래대로 돌아가기 위해 최대 2번의 순서이동이 필요
  let idx1 = 0;
  let idx2 = 0;
  for (let i = 0; i < limit; i++) {
    if (result1 > result2) {
      result1 -= queue1[idx1];
      result2 += queue1[idx1];
      queue2.push(queue1[idx1]);
      idx1++;
      answer++;
    } else if (result1 < result2) {
      result2 -= queue2[idx2];
      result1 += queue2[idx2];
      queue1.push(queue2[idx2]);
      idx2++;
      answer++;
    } else return answer;
  }
  return -1;
}

console.log(solution([1, 1], [1, 5]));
