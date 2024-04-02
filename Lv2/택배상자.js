function solution(order) {
  let answer = 0;
  let stack = [];
  let secondStack = [];
  for (let i = 0; i < order.length; i++) {
    stack.push(i + 1);
    while (order[secondStack.length] === stack[stack.length - 1] && stack.length > 0) {
      let pop = stack.pop();
      secondStack.push(pop);
      answer += 1;
    }
  }
  return answer;
}
console.log(solution([4, 3, 1, 2, 5]));
