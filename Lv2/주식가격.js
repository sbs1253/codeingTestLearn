function solution(prices) {
  let answer = new Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      let price = stack.pop();
      answer[price] = i - price;
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    let price = stack.pop();
    answer[price] = prices.length - 1 - price;
  }
  return answer;
}

console.log(solution([1, 2, 3, 1, 5]));
