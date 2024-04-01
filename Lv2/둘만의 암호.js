function solution(s, skip, index) {
  let answer = '';
  let arr = [];
  let non = [...skip].sort();

  for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    if (String.fromCharCode(i) == non[0]) non.shift();
    else arr.push(String.fromCharCode(i));
  }

  for (let i = 0; i < s.length; i++) {
    if (arr.indexOf(s[i]) + index > arr.length - 1) arr.push(...arr);
    answer += arr[arr.indexOf(s[i]) + index];
  }
  return answer;
}

console.log(solution('yyyyy', 'za', 2));
