function solution(k, tangerine) {
  let answer = 0;
  let obj = {};
  tangerine.forEach((e) => {
    obj[e] ? (obj[e] += 1) : (obj[e] = 1);
  });
  let arr = Object.values(obj).sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    console.log(k);

    if (k == 0) break;
    if (k - arr[i] > 0) {
      k = k - arr[i];
      answer += 1;
    } else if (k - arr[i] < 0 && i !== arr.length - 1) {
      continue;
    } else if (k - arr[i] < 0 && i == arr.length - 1) {
      answer += 1;
    }
  }
  console.log(arr);
  return answer;
}
console.log(solution(5, [1, 3, 2, 5, 4, 5, 2, 3]));
