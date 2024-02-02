function solution(dartResult) {
  let arr = [];
  let str = dartResult.match(/\D+/g);
  let num = dartResult.match(/\d+/g);
  str.forEach((e, i) => {
    [...e].forEach((v) => {
      if (v == 'S') {
        arr[i] = Math.pow(num[i], 1);
      } else if (v == 'D') {
        arr[i] = Math.pow(num[i], 2);
      } else if (v == 'T') {
        arr[i] = Math.pow(num[i], 3);
      }
      if (v == '*') {
        arr[i - 1] *= 2;
        arr[i] *= 2;
      } else if (v == '#') {
        arr[i] *= -1;
      }
    });
  });
  return arr.reduce((a, b) => a + b);
}

console.log(solution('1D2S#10S	'));
