function solution(n) {
  var answer = 0;
  let ar = [];
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  arr.forEach((e) => {
    if (e === 2 || e === 3) answer += 1;
    else if (e != 1 && e % 2 !== 0 && e % 3 !== 0) {
      answer += 1;
      ar.push(e);
    }
  });
  console.log(ar);
  return answer;
}
console.log(solution(100));
