function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((e, i) => e + x * i);
}
/* x	n	answer
  2	5	[2,4,6,8,10] */
