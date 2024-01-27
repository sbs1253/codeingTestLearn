function solution(sizes) {
  var answer = 0;
  let row = [];
  let column = [];
  sizes.forEach(([a, b]) => {
    if (a > b) {
      row.push(a);
      column.push(b);
    } else {
      row.push(b);
      column.push(a);
    }
  });
  answer = Math.max(...row) * Math.max(...column);
  return answer;
}
