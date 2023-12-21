function solution(n) {
  return n === Math.pow(~~Math.sqrt(n), 2) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}
