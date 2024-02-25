function solution(s) {
  let answer = 0;
  let stack = [];
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
        stack.push(s[i]);
      } else if (s[i] === ')') {
        if (stack.lastIndexOf('(') === stack.length - 1 && stack.indexOf('(') !== -1) {
          stack.splice(stack.lastIndexOf('('), 1);
        } else break;
      } else if (s[i] === '}') {
        if (stack.lastIndexOf('{') === stack.length - 1 && stack.indexOf('{') !== -1)
          stack.splice(stack.lastIndexOf('{'), 1);
        else break;
      } else if (s[i] === ']') {
        if (stack.lastIndexOf('[') === stack.length - 1 && stack.indexOf('[') !== -1)
          stack.splice(stack.lastIndexOf('['), 1);
        else break;
      }
      result += 1;
    }
    result === s.length && stack.length === 0 ? (answer += 1) : answer;
    stack = [];
    result = 0;
    s = s.slice(1, s.length) + s.slice(0, 1);
  }

  return answer;
}
console.log(solution('({()})'));
// console.log(solution('[](){}'));
