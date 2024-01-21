function solution(number) {
  var answer = 0;
  let arr = [];

  for (var i = 0; i < number.length - 2; i++) {
    for (var j = i + 1; j < number.length; j++) {
      for (var k = j + 1; k < number.length; k++) {
        if (number[j] === undefined) continue;
        arr.push([number[i], number[j], number[k]]);
      }
    }
  }
  answer = arr.filter((e) => e.reduce((acc, cur) => acc + cur, 0) === 0);
  return answer.length;
}
