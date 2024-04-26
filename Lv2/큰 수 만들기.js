function solution(number, k) {
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    let v = number[i];
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < v) {
      stack.pop();
      k--;
    }
    stack.push(v);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }

  return stack.join('');
}
console.log(solution('333222111', 3));
