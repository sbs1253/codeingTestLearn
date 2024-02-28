function solution(want, number, discount) {
  let answer = 0;
  let obj = {};
  for (let i = 0; discount.length - i >= 10; i++) {
    want.forEach((e) => (obj[e] = 0));
    if (want.indexOf(discount[i]) !== -1) {
      for (let j = i; j < i + 10; j++) {
        obj[discount[j]] += 1;
      }
    }
    let result = number.every((e, i) => e == Object.values(obj)[i]);
    result ? (answer += 1) : undefined;
  }
  return answer;
}
console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ]
  )
);
