function solution(n) {
  let country = [1, 2, 4];
  let result = [];
  while (n > 3) {
    if (n % 3 == 0) {
      result.push(country[2]);
      n = n / 3 - 1;
    } else {
      result.push(country[(n % 3) - 1]);
      n = ~~(n / 3);
    }
  }
  result.push(country[n - 1]);
  return result.reverse().join('');
}

console.log(solution(15));
