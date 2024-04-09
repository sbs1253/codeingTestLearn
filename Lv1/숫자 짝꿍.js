function solution(X, Y) {
  answer = '';
  let obj = {};
  let arr = [];

  [...X].forEach((e) => {
    if (obj[e] === undefined) obj[e] = 1;
    else obj[e] += 1;
  });

  [...Y].forEach((e) => {
    if (obj[e]) {
      obj[e] -= 1;
      arr.push(e);
    }
  });

  if (arr.length == 0) return -1;
  else if (
    Number(
      arr.reduce((a, b) => a + b),
      0
    ) == 0
  )
    return '0';
  else return arr.sort((a, b) => b - a).reduce((a, b) => a + b);
}
console.log(solution('100', '20345'));
