function solution(brown, yellow) {
  let num = brown + yellow;
  let arr = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      arr.push([num / i, i]);
    }
  }
  let result = arr.filter((e) => (e[0] - 2) * (e[1] - 2) === yellow).flat();
  return result;
}
console.log(solution(18, 6));
