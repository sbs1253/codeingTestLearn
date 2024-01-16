function solution(s) {
  var answer = '';
  let arr = s.toLowerCase().split(' ');
  answer = arr
    .map((e) => {
      return [...e]
        .map((str, i) => {
          if (i % 2 === 0) str = str.toUpperCase();
          return str;
        })
        .join('');
    })
    .join(' ');
  return answer;
}
