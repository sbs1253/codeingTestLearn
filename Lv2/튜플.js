function solution(str) {
  let answer = [];
  let arrStrings = str.replace(/},{/g, '|').replace(/}/g, '').replace(/{/g, '').split('|');
  let arr = arrStrings.map((s) => s.split(',').map(Number)).sort((a, b) => a.length - b.length);
  arr.forEach((s) => {
    s.forEach((e) => {
      if (answer.indexOf(e) == -1) {
        answer.push(e);
      }
    });
  });
  return answer;
}
console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
