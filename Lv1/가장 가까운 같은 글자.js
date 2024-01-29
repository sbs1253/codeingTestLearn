function solution(s) {
  let answer = [];
  let arr = [];
  [...s].map((e, i) => {
    if (answer.indexOf(e) === -1) {
      answer.push(e);
      arr.push(-1);
    } else {
      arr.push(i - answer.lastIndexOf(e));
      answer.push(e);
    }
  });
  return arr;
}
