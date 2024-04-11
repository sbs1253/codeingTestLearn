function solution(topping) {
  let result = 0;
  let cake = {};
  let cut = {};
  let totalTopping = 0;
  let cutTopping = 0;
  topping.forEach((e) => {
    if (!cake[e]) {
      cake[e] = 0;
      totalTopping += 1;
    }
    cake[e] += 1;
  });
  topping.forEach((e) => {
    if (!cut[e]) {
      cut[e] = 0;
      cutTopping += 1;
    }
    cut[e] += 1;
    cake[e] -= 1;
    if (cake[e] == 0) totalTopping -= 1;
    if (cutTopping == totalTopping) result += 1;
  });
  return result;
}
console.log(solution([1, 1, 4, 7, 7, 5]));
