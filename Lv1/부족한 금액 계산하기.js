function solution(price, money, count) {
  var answer = 0;
  let ticket = price;
  for (var i = 0; i < count; i++) {
    answer += ticket;
    ticket += price;
  }

  return money >= answer ? 0 : answer - money;
}
