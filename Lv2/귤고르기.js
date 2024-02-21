function solution(k, tangerine) {
  let answer = 0;
  let obj = {};
  tangerine.forEach((e) => {
    obj[e] ? (obj[e] += 1) : (obj[e] = 1);
  });
  let arr = Object.values(obj).sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (k <= 0) break;
    else {
      k = k - arr[i];
      answer += 1;
    }
  }
  return answer;
}
console.log(solution(3, [1, 1, 2, 2]));
