function solution(msg) {
  let answer = [];
  let obj = [];
  let str = '';
  let arr = [...msg];
  for (let i = 65; i <= 90; i++) {
    obj[String.fromCharCode(i)] = i - 64;
  }
  while (arr.length > 0) {
    let c = arr.shift();
    if (obj[str + c] !== undefined) {
      str = str + c;
    } else {
      answer.push(obj[str]);
      obj[str + c] = Object.keys(obj).length + 1;
      arr.unshift(c);
      str = '';
    }
  }
  if (str !== '') {
    answer.push(obj[str]);
  }
  return answer;
}
console.log(solution('KAKAO'));
