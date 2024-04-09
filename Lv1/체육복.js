function solution(n, lost, reserve) {
  let arr = Array(n + 1).fill(1);
  lost.forEach((e) => (arr[e] -= 1));
  reserve.forEach((e) => (arr[e] += 1));
  for (let i = 1; i <= arr.length; i++) {
    if (i + 2 <= arr.length) {
      let num = arr.slice(i, i + 2).reduce((a, b) => a + b, 0);
      if (num == 2) {
        arr[i] = 1;
        arr[i + 1] = 1;
      }
    }
  }

  let first = arr.filter((e) => e).length - 1;
  return first;
}
console.log(solution(5, [4, 5], [3, 4]));
