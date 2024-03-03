function solution(n, left, right) {
  let arr = [];
  let a = Math.floor(left / n) + 1;
  let b = left % n;
  let c = Math.floor(right / n) + 1;
  let d = n * (c - a) + (right % n) + 1;

  for (let i = a; i <= c; i++) {
    if (arr.length > right) break;
    for (let j = 1; j <= n; j++) {
      if (i <= j) arr.push(j);
      else arr.push(i);
    }
  }
  return arr.slice(b, d);
}

console.log(solution(4, 7, 14));
