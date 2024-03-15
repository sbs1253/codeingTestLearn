function solution(msg) {
  let answer = [];
  let obj = [];
  for (let i = 65; i <= 90; i++) {
    obj[String.fromCharCode(i)] = i - 64;
  }
  for (let i = 0; i < msg.length; i++) {
    for (let j = 1; j <= msg.length; j++) {
      if (obj[msg.slice(0, j + 1)]) {
        continue;
      } else {
        answer.push(obj[msg.slice(0, j)]);
        obj[msg.slice(0, j + 1)] = Object.keys(obj).length + 1;
        msg = msg.slice(j);
        break;
      }
    }
    // console.log(msg);
  }
  console.log(obj);
  return answer;
}
console.log(solution('KAKAO'));
