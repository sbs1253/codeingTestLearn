function solution(prices) {
  let answer = new Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      let topIndex = stack.pop();
      answer[topIndex] = i - topIndex;
    }
    stack.push(i);
  }

  // 스택에 남은 인덱스 처리
  while (stack.length > 0) {
    let topIndex = stack.pop();
    answer[topIndex] = prices.length - 1 - topIndex;
  }

  return answer;
}

console.log(solution([1, 2, 3, 1, 5]));
