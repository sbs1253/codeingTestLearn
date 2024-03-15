function solution(n, k) {
  let answer = 0;
  let nums = n.toString(k).split(/0/).map(Number);
  nums.forEach((e) => {
    let el = 0;
    for (let i = 1; i <= Math.sqrt(e); i++) {
      if (e !== 1 && e % i == 0) el += 1;
    }
    if (el == 1) answer += 1;
  });
  return answer;
}
console.log(solution(437674, 3));
