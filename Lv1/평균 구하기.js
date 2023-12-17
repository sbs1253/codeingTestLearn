function solution(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}
// arr	return
// [1,2,3,4]	2.5
