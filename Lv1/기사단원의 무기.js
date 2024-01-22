function solution(number, limit, power) {
  let answer = 0;
  let arr = [];
  for (let i = 1; i <= number; i++) {
    let num = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i / j === j) {
        num -= 1;
      }
      if (i % j === 0) {
        num += 2;
      }
    }
    arr.push(num);
  }
  answer = arr.map((e) => (e <= limit ? e : power)).reduce((acc, cur) => acc + cur, 0);
  return answer;
}
console.log(solution(10, 3, 2));
