function solution(x) {
  let result = 0;
  result = [...x.toString()].reduce((acc, cur) => acc + +cur, 0);
  return !Boolean(x % result);
}
